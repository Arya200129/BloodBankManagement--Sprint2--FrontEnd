export class BloodRequest{
    constructor(
        public requestedBloodGroup:string,
        public requestDate:string,
        public status:string,
        public blookBankName_donorName:string,
        public bloodUserId:number
    ){}
}