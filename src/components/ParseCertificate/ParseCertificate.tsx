
import ASN1 from "@lapo/asn1js";


interface Certificate {
  id: number;
  commonName: string;
  validityPeriod: string;
  issuerName: string;
}

const ParseCertificate = (certData: ArrayBuffer): Certificate | null => {
  const result = ASN1.decode(certData);
  if (result.typeName() !== "SEQUENCE") {
    throw "Неправильна структура конверта сертифіката (очікується SEQUENCE)";
  }
  const tbsCertificate = result.sub[0];

  if (!tbsCertificate || !tbsCertificate.sub) {
    return null;
  }

  const commonName = ""; 
  const validityPeriod = ""; 
  const issuerName = ""; 

  const certificate: Certificate = {
    id: Date.now(),
    commonName: commonName,
    validityPeriod: validityPeriod,
    issuerName: issuerName,
  };

  return certificate;
};

export default ParseCertificate;