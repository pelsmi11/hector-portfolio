import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
  subject: string;
}

export const ContactEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  subject,
}) => (
  <div>
    <h1>Hola Hector!</h1>
    <div className="flex flex-col gap-6">
      <p className="text-4xl font-bold">
        Te informo que {name} quiere contactarte con el asunto: &quot;{subject}
        &quot;
      </p>
      <div className="border rounded-2xl border-black">
        <p className="text-2xl font-bold">su mensaje es:</p>
        <p>&quot;{message}&quot;</p>
      </div>
      <div className="border border-black">
        <p>este es su correo</p>
        <p>{email}</p>
      </div>
    </div>
  </div>
);
