var nodes = null;
var edges = null;
var network = null;

function draw() {

  nodes = [
    {id: 1,  value: 2,  label: 'Hermosillo' },
    {id: 2,  value: 31, label: 'Caborca'},
    {id: 3,  value: 12, label: 'Altar'},
    {id: 4,  value: 16, label: 'Guaymas' },
    {id: 5,  value: 17, label: 'Huatabampo' },
    {id: 6,  value: 15, label: 'San Carlos'},
    {id: 7,  value: 6,  label: 'Pitiquito'},
    {id: 8,  value: 5,  label: 'Obregon'},
    {id: 9,  value: 30, label: 'Cumpas'},
    {id: 10, value: 18, label: 'Sahuaripa'},
  ];

  edges = [
    {from: 2, to: 8, value: 3, label: 3},
    {from: 2, to: 9, value: 5, label: 5},
    {from: 2, to: 10,value: 1, label: 1},
    {from: 4, to: 6, value: 8, label: 8},
    {from: 5, to: 7, value: 2, label: 2},
    {from: 4, to: 5, value: 1, label: 1},
    {from: 9, to: 10,value: 2, label: 2},
    {from: 2, to: 3, value: 6, label: 6},
    {from: 3, to: 9, value: 4, label: 4},
    {from: 5, to: 3, value: 1, label: 1},
    {from: 2, to: 7, value: 4, label: 4},
    {from: 1, to: 7, value: 2, label: 2}

  ];

  // Instantiate our network object.
  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  debugger;
  var options = {
    nodes: {
      shape: 'dot',
      scaling: {
        customScalingFunction: function (min,max,total,value) {
          return value/total;
        },
        min:5,
        max:150
      }
    }
  };
  network = new vis.Network(container, data, options);
}
