export enum GtagEvents_Action {
  Feedback = 'feedback',
}
export enum GtagEvents_FeedbackCategory {
  TranslateIt = 'translate-it',
  DoNotTranslate = 'do-not-translate',
  Shown = 'shown',
}

export interface GtagEvents {
  action: GtagEvents_Action;
  category: GtagEvents_FeedbackCategory;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: 'beacon' | 'xhr' | 'image';
}
