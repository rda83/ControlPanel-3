export interface Pipeline {
    name: string,
    cronExpression: string,
    description: string,
    blocked: string,
    pipelineItems: PipelineItem[],
}

export interface PipelineItem {
    sortOrder: string,
    description: string,
    blocked: string,
    options: string,
}