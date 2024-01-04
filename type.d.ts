declare namespace NodeJS {
  export interface ProcessEnv {
    SECRET_KEY: string;
  }
}

type User = {
    id: string,
    email: string,
    image?: string,
    name: string,
    address?: string,
    country?: string,
    countryPhoneCode?: string,
    lockCode: boolean,
    code?: string,
    number: string,
    password: string,
    normalSignUp: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date,
    emailVerified: boolean;
    subscribe?: any,
  };
  

  type Enterprise = {
    id: string,
    email: string,
    activity: string,
    address: string,
    numbers: string,
   
    currency: string,
    name: string,
    rccm?: string,
    nif?: string,
    statut: string,
    bankNumber?: string,
    codeFinance?: string,
    lockFinance?: boolean,
    website?: string,
    factureNumber: int,
    
  };
  


 


  type Customer = {
    externalContact  :string
    externalEmail  :string
    externalName  :string
    poste  :string
    activity  :string
    address  :string
    country  :string
    email?  :string 
    image?  :string 
    name :string
    type :string
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };
  
enum ProjectTypeEnum{
  INPROGRESS,
  ISVALIDATE,
  ISFINISH
}

  type Project = {
    name  :string
    type :ProjectTypeEnum
    invoiceNumber?  :int
    proformaDate?  :Date
    invoiceDate?  :Date
    discountItemTable?  :string
    table?  :string
    amountTotal?  :string
    tva?  :String
    modalite?  :String
    discount?  :String
    remarque?  :String
    invoiceType :int
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };

  type Transaction = {
    client  :string
    projectName  :string
    taxe?  :string
    type  :string
    amountTotal  :string
 
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };

enum FolderType {
  PROVIDER,
  SUPPLIER,
  PERSONAL
}


    type Folder = {
    name  :string
    type  :FolderType 
 
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };


 
    type Payment = {
    reference  :string
    type  :string
    month  :number
    amount  :number
    currency  :string
    subscribe?  :any
     //Action
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };
    type Subscribe = {
    paymentId  :string
    startAt? :     Date     
    endAt? :     Date      
     //Action
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };
  
    type FolderUser = {
    contact  :string
    country  :string
    name  :string
    email?  :string
    function?  :string
    indicatif  :string
    rate  :string
    sexe  :string
      
    poste? : String  
    contrat? : String
    birthDate? :     Date
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };
  



  type Planning = {
    name  :string
    color?  :string
    
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };


  type PlanningItem = {
   
    name  :string
    color?  :string
    content  :string
    date? :     Date
    
     //Action
    inTrash? :boolean 
    createdAt? :     Date     
    updatedAt? :     Date     
    deletedAt? :     Date       
  };
  
