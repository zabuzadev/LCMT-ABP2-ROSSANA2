import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface FormProps {
  showPhone?: boolean;
  webhookLink: string;
}

export default function Form({ showPhone = true, webhookLink }: FormProps) {
    // Adicionar estados para os campos do formulário
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function validateForm(): boolean {
    if (fullname.trim() === '' || email.trim() === '') {
      alert('Preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  }

  useEffect(() => {
    const form = document.getElementById('form_1') as HTMLFormElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;

    const formatPhone = (value: string): string => {
      value = value.replace(/\D/g, '');
      value = value.substring(0, 11);

      if (value.length > 0) {
        value = '(' + value;
      }
      if (value.length > 2) {
        value = value.slice(0, 3) + ') ' + value.slice(3);
      }
      if (value.length > 8) {
        value = value.slice(0, 10) + '-' + value.slice(10);
      }

      return value;
    };

    const handlePhoneInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      target.value = formatPhone(target.value);
    };

    const handlePhoneKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'Backspace' || 'Delete') {
        const target = e.target as HTMLInputElement;
        target.value = target.value.replace(/\D/g, '');
      }
    };

    return () => {
    };
  }, [fullname, email, phone]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = {
      submission_date: new Date().toISOString(),
      nome_formulario: 'funil_call_Protocolo-Madrid',
      'Página de Captura': window.location.pathname.replace(/^\/|\/$/g, ''),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      phone: `${phone.replace(/\D/g, '')}`,
      fullname,
      email
    };


    fetch(webhookLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Webhook disparado com sucesso:', result);
        window.location.href = 'https://www.fazendaafrica.com.br/abrindoaporteira-obg';
      })
      .catch(error => {
        console.error('Erro ao disparar o webhook:', error);
      });
  }

  function formatPhone(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);

    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 2) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 10) + '-' + value.slice(10);
    }

    return value;
  }
  return (
    <form id="form_1" className="space-y-4 w-full mt-4" onSubmit={handleSubmit}>
              <Input
                id="fullname"
                type="text"
                placeholder="Nome completo"
                className="bg-green-50 text-green-950 border-green-300 h-12"
                required
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              {showPhone && (
                <Input
                  id="phone"
                  type="tel"
                  placeholder="WhatsApp"
                  className="bg-green-50 text-green-950 border-green-300 h-12"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
              )}
              <Input
                id="email"
                type="email"
                placeholder="E-mail"
                className="bg-green-50 text-green-950 border-green-300 h-12"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-full bg-[#2cce5a] hover:bg-[#15468F] text-white text-lg py-6 shadow-xl transition-all">
              Quero participar →
              </Button>
            </form>
    )
}