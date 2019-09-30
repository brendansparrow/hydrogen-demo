const page = ({ data }) => `
  <main>
    <h1>${data.pageTitle}</h1>
    <p>${data.text}</p>
  </main>
`

module.exports = {
  layout: 'default',
  title: 'Hydrogen webpage',
  page,
  data: () => ({
    pageTitle: 'Hydrogen Demo',
    text: 'Hello World!',
    description: 'Super fast static-site generator',
    css: '/public/css/style.css'
  }),
  head: ({ data, css }) => [
    ['meta', { name: 'description', content: data.description }],
    ['link', { rel: 'stylesheet', href: data.css }]
  ]
}
