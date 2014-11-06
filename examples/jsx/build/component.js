var Hello = React.createClass({displayName: 'Hello',
          render: function() {
              return React.createElement("div", null, 
                            React.createElement("h1", null, "Hello"), 
                            React.createElement("h2", null, "meet.js"), 
                            React.createElement("small", null, ":)")
                    );
          }
      });