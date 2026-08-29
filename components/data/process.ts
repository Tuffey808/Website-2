export interface ProcessStep {
    number: string;
    key: "discover" | "plan" | "create" | "launch" | "optimize";
    icon: string;
}

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        key: "discover",
        icon: "/images/process/discover.svg",
    },
    {
        number: "02",
        key: "plan",
        icon: "/images/process/plan.svg",
    },
    {
        number: "03",
        key: "create",
        icon: "/images/process/create.svg",
    },
    {
        number: "04",
        key: "launch",
        icon: "/images/process/launch.svg",
    },
    {
        number: "05",
        key: "optimize",
        icon: "/images/process/optimize.svg",
    },
];