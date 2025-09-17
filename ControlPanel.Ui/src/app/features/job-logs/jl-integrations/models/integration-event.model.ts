export interface IntegrationEvent {
    id: number;
    typeIntegration : string;
    started : Date;
    finished : Date;
    periodicTaskId : number;
    success : boolean;
    totalMilliseconds: number;
    message : string;
}