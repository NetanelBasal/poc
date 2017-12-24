module.exports = function (plop) {
  plop.setGenerator('DA Store', {
    description: 'Datorama store',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Store name'
    }],
    actions: [{
      type: 'add',
      path: "./{{'dashCase' name}}/{{'dashCase' name}}.model.ts",
      templateFile: './templates/model.tpl'
    },
      {
        type: 'add',
        path: "./{{'dashCase' name}}/{{'dashCase' name}}.providers.ts",
        templateFile: './templates/providers.tpl'
      },
      {
        type: 'add',
        path: "./{{'dashCase' name}}/{{'dashCase' name}}.store.ts",
        templateFile: './templates/store.tpl'
      },
      {
        type: 'add',
        path: "./{{'dashCase' name}}/{{'dashCase' name}}.service.ts",
        templateFile: './templates/service.tpl'
      }]
  });

};
