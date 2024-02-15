import { IFotrgebot } from "../common/interfaces/Forgebot";

export interface IStats extends IFotrgebot{
    count : number
}

export interface IBenefits extends IFotrgebot{
    description : string
}

export interface IFeatureBenefits extends IFotrgebot{
    description : string
    image : string
}

export interface ITestimonials extends IFotrgebot{
    name : string
    username : string
    description : string
    image : string
}

export interface ISocialMediaLinks extends IFotrgebot{
    image : string,
    link : string
}

