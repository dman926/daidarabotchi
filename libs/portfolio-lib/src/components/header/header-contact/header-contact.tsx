export interface HeaderContactProps {
  email?: { type?: string; email: string }[];
  phone?: { type?: string; phone: string }[];
  address?: {
    street?: string;
    city: string;
    state: string;
    zip?: string;
    country?: string;
  };
}

export function HeaderContact({ email, phone, address }: HeaderContactProps) {
  return <div>HeaderContact</div>;
}

export default HeaderContact;
