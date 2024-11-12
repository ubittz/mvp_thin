export interface CertificateState {
  certificateList: Certificate[];
}

export interface Certificate {
  id: number;
  title: string;
  email: string;
  createdAt: Date;
}
