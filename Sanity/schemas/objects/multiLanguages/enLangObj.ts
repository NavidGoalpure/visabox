// چون بعضی از فیلد ها در گذشته چند زبانه طراحی شدن اما بعدا به این نتیجه رسیدیم که فقط انگلیسی باشن این آبجکت برای اونها ایجاد شد
export default {
  name: 'en_lang',
  title: 'String-En',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'en',
    },
  },
};
