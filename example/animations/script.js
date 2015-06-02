var items = [{
  icon: 'cubes',
  title: 'blocks'
}, {
  icon: 'exchange',
  title: 'bindings'
}, {
  icon: 'line-chart',
  title: 'speed'
}, {
  icon: 'database',
  title: 'data'
}, {
  icon: 'wrench',
  title: 'debugging'
}, {
  icon: 'server',
  title: 'architecture'
}, {
  icon: 'cube',
  title: 'modular'
}, {
  icon: 'cogs',
  title: 'extensible'
}, {
  icon: 'crosshairs',
  title: 'consistent'
}, {
  icon: 'lightbulb-o',
  title: 'innovative'
}, {
  icon: 'terminal',
  title: 'clean'
}, {
  icon: 'plug',
  title: 'feature rich'
}];
var filterVal = blocks.observable();
blocks.query({
  filter: filterVal,
  items: blocks.observable(items).extend('filter', function(value) {
    return !filterVal() || value.title.indexOf(filterVal().toLowerCase()) != -1;
  })
});
