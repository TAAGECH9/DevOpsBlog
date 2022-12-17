import { OnboardingPrompts } from "./categories.js";


export const GeneralPrompt = {
    type: 'checkbox',
    message: 'Please Select the general Customer Scope',
    name: 'general',
    choices: [
        ...OnboardingPrompts.GeneralScope
    ],
    validate(answer: any) {
        if (answer.length < 1) {
            return 'You must choose at least one configuration';
        }
        return true;
    },
}

export const VmPrompt = {
    type: 'checkbox',
    message: 'What type of Virtual Machines are in Scope?',
    name: 'vm_types',
    choices: [
        ...OnboardingPrompts.VmScope
    ],
    validate(answer: any) {
        if (answer.length < 1) {
            return 'You must choose at least one configuration';
        }
        return true;
    },
    when(answer: any) {
        return answer.general.includes("VM")
    }
}

export const WindowsSecPrompt = {
    type: 'confirm',
    message: 'Windows security enabled',
    name: 'windows_security',
    default: false,
    when(answer: any) {
        return answer.vm_types != undefined && answer.vm_types.includes("Windows")
    }
}

export const IsPaasInScope = {
    type: 'confirm',
    message: 'Any further PaaS Solutions in Scope?',
    name: 'paas_in_scope',
    default: false
}

export const PaasConfigs = {
    type: 'checkbox',
    message: '',
    name: 'paas_resources',
    choices: [
        ...OnboardingPrompts.PaaSScope
    ],
    validate(answer: any) {
        if (answer.length < 1) {
            return 'You must choose at least one configuration';
        }
        return true;
    },
    when(answer: any) {
        return answer.paas_in_scope
    }
}
