import MedPackage from './med-package.model';
export default interface MedProduct {
  id: number;
  medprodId: string;
  produktnamn: string;
  form: string;
  styrka: string;
  nplId: string;
  godkannandeDatum: string;
  utbytbar: string;
  atCkod: string;
  avregDatum: Date;
  godkannande: string;
  ftgavtlv: string;
  mti: string;
  ombud: string;
  dosdispension: string;
  aktivSubstans: string;
  narkotikaKlassad: string;
  genomgattGranskning: string;
  liivDatum: Date;
  ursprung: string;
  lakemedelsTyp: string;
  packages: MedPackage[];
}
