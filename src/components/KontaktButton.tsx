"use client"

import React from 'react';
import { Button } from './ui/button';

const generateVCard = () => {
  const contactData = {
    name: 'Jan Jansen',
    phone: '+4915786599562',
    email: 'jj.development@outlook.com',
    website: 'https://portfolio-jj.vercel.app',
  };

  const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
TEL:${contactData.phone}
EMAIL:${contactData.email}
URL:${contactData.website}
END:VCARD`;

  const blob = new Blob([vCardContent], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'contact.vcf';
  a.click();
  window.URL.revokeObjectURL(url);
};

const KontaktButton: React.FC = () => {
  return (
      <div className="mt-12">
        <Button onClick={generateVCard}>
          Kontakt zu Kontakten hinzufügen
        </Button>
      </div>
  );
};

export default KontaktButton;
