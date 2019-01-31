export default interface MedPackage {
  id: number;
  packageId: string;
  medprodId: string;
  nplforpackningsId: string;
  varuNr: string;
  forpackingsText: string;
  antal: number;
  enhet: string;
  endastDosdisp: string;
  receptbelagd: string;
  avregDatum: Date;
  marknadsfors: string;
  aip: string;
  aup: string;
  visasIPrisDb: string;
  inomForman: string;
  gallandeBegransningar: string;
  gallandeVilkorsText: string;
}
