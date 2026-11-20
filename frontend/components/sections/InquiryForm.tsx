'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '@/lib/language-context';
import { api } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const phoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

const inquirySchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().regex(phoneRegex, { message: 'Valid Bangladeshi phone required (e.g. 017XXXXXXXX)' }),
  email: z.string().email().optional().or(z.literal('')),
  packageId: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  initialPackageId?: string;
  className?: string;
  compact?: boolean;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialPackageId = '',
  className = '',
  compact = false,
}) => {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      packageId: initialPackageId || '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (values.honeypot && values.honeypot.trim().length > 0) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await api.submitInquiry({
        fullName: values.fullName,
        phone: values.phone,
        email: values.email || undefined,
        packageId: values.packageId || undefined,
        message: values.message || undefined,
      });

      if (res.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(t.contact.errorMessage);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.contact.errorMessage);
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 bg-white border border-[#1E7C46] rounded-2xl shadow-sm text-center space-y-4 ${className}`}>
        <div className="w-12 h-12 mx-auto bg-[#F0FDF4] text-[#1E7C46] flex items-center justify-center rounded-full border border-[#86EFAC]">
          <CheckCircle2 className="w-7 h-7 text-[#1E7C46]" />
        </div>
        <h3 className="text-xl font-bold text-[#111827]">
          {t.contact.successTitle}
        </h3>
        <p className="text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto">
          {t.contact.successMessage}
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setStatus('idle')}
            className="rounded-xl"
          >
            {lang === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Inquiry'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white border border-[#E5E7EB] p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 ${className}`}
      noValidate
    >
      {/* Hidden Honeypot */}
      <input
        id="honeypot"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        style={{ display: 'none' }}
        {...register('honeypot')}
      />

      {status === 'error' && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage || t.contact.errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-1.5">
        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-normal text-[#374151]">
          {t.contact.fullNameLabel} <span className="text-[#D97706]">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder={t.contact.fullNamePlaceholder}
          {...register('fullName')}
          className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E7C46]/20 focus:border-[#1E7C46] transition-colors ${
            errors.fullName ? 'border-red-500' : 'border-[#D1D5DB]'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-red-600 mt-1">{t.contact.nameValidationMsg}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-normal text-[#374151]">
          {t.contact.phoneFieldLabel} <span className="text-[#D97706]">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t.contact.phoneFieldPlaceholder}
          {...register('phone')}
          className={`w-full px-4 py-2.5 text-sm font-mono bg-white border rounded-xl text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E7C46]/20 focus:border-[#1E7C46] transition-colors ${
            errors.phone ? 'border-red-500' : 'border-[#D1D5DB]'
          }`}
        />
        {errors.phone && (
          <p className="text-xs text-red-600 mt-1">{t.contact.phoneValidationMsg}</p>
        )}
      </div>

      {/* Email */}
      {!compact && (
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-normal text-[#374151]">
            {t.contact.emailFieldLabel}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={t.contact.emailFieldPlaceholder}
            {...register('email')}
            className="w-full px-4 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-xl text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E7C46]/20 focus:border-[#1E7C46] transition-colors"
          />
        </div>
      )}

      {/* Package Selection */}
      <div className="space-y-1.5">
        <label htmlFor="packageId" className="block text-xs font-semibold uppercase tracking-normal text-[#374151]">
          {t.contact.packageSelectLabel}
        </label>
        <select
          id="packageId"
          {...register('packageId')}
          className="w-full px-4 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-xl text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E7C46]/20 focus:border-[#1E7C46] transition-colors"
        >
          <option value="">{t.contact.packageSelectDefault}</option>
          {t.packages.items.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {lang === 'bn' ? pkg.nameBn : pkg.name} — {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      {!compact && (
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-normal text-[#374151]">
            {t.contact.messageFieldLabel}
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder={t.contact.messageFieldPlaceholder}
            {...register('message')}
            className="w-full px-4 py-2.5 text-sm bg-white border border-[#D1D5DB] rounded-xl text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E7C46]/20 focus:border-[#1E7C46] resize-none transition-colors"
          />
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full text-center rounded-xl font-semibold bg-[#1E7C46] hover:bg-[#176337] text-white transition-colors"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contact.submitting}</span>
            </span>
          ) : (
            t.contact.submitBtn
          )}
        </Button>
      </div>

      <p className="text-[11px] text-[#6B7280] text-center leading-normal">
        {lang === 'bn'
          ? 'আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে এবং কেবল বিনিয়োগ পরামর্শের কাজে ব্যবহৃত হবে।'
          : 'Your details are strictly confidential and used solely for investment consultation.'}
      </p>
    </form>
  );
};
