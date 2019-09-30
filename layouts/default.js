module.exports = ({ title, content, head }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    ${head}
  </head>
  <body>
    ${content}
  </body>
</html>
`
