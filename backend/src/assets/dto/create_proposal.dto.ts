import { IsNotEmpty, IsNumber, IsString, MaxLength, 
    MinLength, Min, IsBoolean, Max} from "class-validator";

const minDateInSeconds =  Date.now() / 1000 + 21600; // Current date plus 6 hours in seconds
const maxDateInSeconds =  Date.now() / 1000 + 2592000; // Current date plus 720 hours in seconds

export class CreateProposalDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(26)
    @MaxLength(35)
    readonly receiverAddress: string; 

    @IsString()
    @MaxLength(100)
    @IsNotEmpty()
    readonly title: string;    
     
    @IsString()
    @IsNotEmpty()
    readonly description: string; 
    
    @IsNumber()
    @IsNotEmpty()
    @Min(minDateInSeconds)
    @Max(maxDateInSeconds)
    readonly endTime: number;    

    @IsNumber()
    @IsNotEmpty()
    @Min(100)
    @Max(1_000_000)
    readonly amountRequested: number;   
    
}
