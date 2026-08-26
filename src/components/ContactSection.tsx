import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { companyData } from '../data/companyInfo';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    servico: 'Moto Frete Express (Urbano)',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);

    // Simulate instant sending / preparation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*Contato via Site - Coopstar Express*\n\n` +
      `👤 *Nome:* ${formData.nome || 'Não informado'}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📞 *Telefone:* ${formData.telefone || 'Não informado'}\n` +
      `📦 *Serviço:* ${formData.servico}\n` +
      `📌 *Assunto:* ${formData.assunto || 'Solicitação de Orçamento'}\n` +
      `💬 *Mensagem:* ${formData.mensagem || 'Gostaria de mais informações.'}`;

    const url = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-slate-900/60 border-t border-slate-800 relative">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Entre em Contato com a Nossa Central
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Estamos prontos para atender sua solicitação 24 horas por dia com agilidade e cordialidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Canais Diretos de Atendimento
              </h3>
              
              <div className="space-y-5">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Telefones da Central (24h)
                    </span>
                    <div className="flex flex-col gap-1 mt-1">
                      <a href={`tel:${companyData.phonePrimaryRaw}`} className="text-base font-bold text-white hover:text-red-400 transition-colors">
                        {companyData.phonePrimary}
                      </a>
                      <a href={`tel:${companyData.phoneSecondaryRaw}`} className="text-base font-bold text-white hover:text-red-400 transition-colors">
                        {companyData.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      WhatsApp Oficial
                    </span>
                    <a
                      href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors block mt-1"
                    >
                      {companyData.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      E-mails para Contato & Cotações
                    </span>
                    <div className="flex flex-col gap-0.5 mt-1">
                      <a href={`mailto:${companyData.emailContact}`} className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
                        {companyData.emailContact}
                      </a>
                      <a href={`mailto:${companyData.email}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        {companyData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Endereço da Base
                    </span>
                    <p className="text-sm font-medium text-slate-200 mt-1">
                      {companyData.address.full}
                    </p>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>Atendimento de plantão 24h para emergências e agendamentos.</span>
              </div>

            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/90 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mensagem Enviada com Sucesso!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Agradecemos seu contato. Nossa equipe de operações entrará em contato com você o mais rápido possível.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
                    >
                      Enviar Outra Mensagem
                    </button>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-sm font-bold text-white transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Falar Agora no WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Envie uma Mensagem ou Solicite uma Proposta
                  </h3>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="nome">
                        Seu Nome ou Empresa *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Ex: João da Silva / Empresa LTDA"
                        className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="email">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="telefone">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="servico">
                        Serviço de Interesse
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        value={formData.servico}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900 text-white rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                      >
                        <option value="Moto Frete Express (Urbano)">Moto Frete Express (Urbano)</option>
                        <option value="Delivery Corporativo & E-commerce">Delivery Corporativo & E-commerce</option>
                        <option value="Viagens & Fora da Capital">Viagens & Fora da Capital</option>
                        <option value="Contrato Dedicado / Motoboy Fixo">Contrato Dedicado / Motoboy Fixo</option>
                        <option value="Serviços Bancários e Cartórios">Serviços Bancários e Cartórios</option>
                        <option value="Outros / Dúvidas">Outros / Dúvidas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="assunto">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Ex: Cotação de entrega rápida para Moema / Pinheiros"
                      className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5" htmlFor="mensagem">
                      Mensagem / Detalhes da Solicitação *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva aqui o serviço desejado, endereços de coleta e entrega, horários ou dúvidas..."
                      className="w-full px-4 py-3 bg-slate-900 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 text-sm transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Enviando...' : 'Enviar Formulário'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="py-3.5 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 text-sm transition-all shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Enviar via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
