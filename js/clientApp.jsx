const app = document.querySelector('#app')
const ce = React.createElement
const myTitle = function(props) {
  return ce(
    'h2',
    {
      style: {
        color: props.color
      }
    },
    props.title
  )
}
const MyApp = function() {
  return ce('div', null, [
    ce(myTitle, {
      title: 'Lost',
      color: 'MEDIUMSPRINGGREEN'
    }),
    ce(myTitle, {
      title: 'Prison Break',
      color: 'DEEPPINK'
    }),
    ce(myTitle, {
      title: 'Game of Thrones',
      color: 'MEDIUMPURPLE'
    })
  ])
}

ReactDOM.render(ce(MyApp), app)
