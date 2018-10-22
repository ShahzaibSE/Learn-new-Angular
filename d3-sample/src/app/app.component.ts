import { Component, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'd3-sample';
  count: number = 0;
  items: any[] = [];
  histogramConfig = {
    el: "#app",
    data: function () {
        var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 40
        };
        return {
            x: null,
            y: null,
            innerSpace: null,
            color: d3.scaleOrdinal().range(d3.schemeCategory20),
            data: null,
            data_n: 10,
            area: null,
            height_i: null,
            left: null,
            right: null,
            settings: {
                strokeColor: "#29B5FF",
                width: 900,
                height: 500,
                parent: 100
            },
            margin: margin
        };
    },
    mounted: function () {
        var width = this.settings.width;
        var height = this.settings.height;
        var margin = this.margin;
        var color = d3.scaleOrdinal().range(d3.schemeCategory20);
        // set the dimensions and margins of the graph
        width = width - margin.left - margin.right,
            height = height - margin.top - margin.bottom;

        // set the ranges
        var x = d3.scaleBand()
            .range([0, width]);

        var y = d3.scaleLinear()
            .range([height, 0]);

        var svg = d3.select('svg');
        var g = svg.append("g")
            .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
        this.innerSpace = g;
        var random = function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var data = [];
        for (let i = 0; i < this.data_n; i++) {
            data[i] = random(1, this.data_n);
        }

        this.data = data;
        x.domain(data.map(function (d, i) {
            return i;
        })); // index
        y.domain([0, Math.max(...data)]); // max of data
        this.y = y;
        this.x = x;
        // add the x Axis
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // add the y Axis
        g.append("g")
            .call(d3.axisLeft(y));
    },
    computed: {
        style: function () {
            return {
                width: this.settings.parent
            }
        },
        draw: function () {
            let height = this.settings.height - this.margin.top - this.margin.bottom;
            let x = this.x, y = this.y;
            let color = this.color;
            if (this.data) {
               this.innerSpace.selectAll(".bar").remove();
                this.innerSpace.selectAll(".bar")
                    .data(this.data)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d, i) {
                        return x(i);
                    })
                    .attr("width", x.bandwidth())
                    .attr("y", function (d) {
                        return y(d);
                    })
                    .attr("height", function (d) {
                        return height - y(d);
                    })
                    .style('fill', function (d, i) {
                        return color(i)
                    });

                return "";
            }
        },
        drawArea: function () {
            let height = this.settings.height - this.margin.top - this.margin.bottom;
            let x = this.x, y = this.y;
            if (this.area) {
                let n = this.data_n, rect = [], left = this.left, right = this.right;
                for (let i = 0; i < n; i++) {
                    if (i >= left && i <= right) {
                        rect[i] = this.height_i;
                    } else {
                        rect[i] = 0;
                    }
                }
                this.innerSpace.selectAll(".bar2").remove();
                this.innerSpace.selectAll(".bar2").data(rect)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d, i) {
                        return x(i);
                    })
                    .attr("y", function (d) {
                        return y(d);
                    })
                    .attr("width", this.x.bandwidth())
                    .attr("height", function (d) {
                        return height - y(d);
                    })
                    .style('opacity', 0.5)
                    .style('fill', "#FFFF00");
                return this.area;
            }

        }
    },
    methods: {
        largestRectangleArea: function () {
            let heights = this.data;
            if (heights === null || heights.length === 0)
                return 0;
            let stack = new AppComponent();
            let left = [];
            for (var i = 0; i < heights.length; i++) {
                while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                    stack.pop();
                }
                let l = stack.isEmpty() ? -1 : stack.peek();
                left.push(l);
                stack.push(i)
            }
            // clear stack
            stack.clear();
            let right = [];
            for (let i = heights.length - 1; i >= 0; i--) {
                while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
                    stack.pop();
                }
                right[i] = stack.isEmpty() ? heights.length : stack.peek();
                stack.push(i);
            }
            let area = 0, l = 0, r = 0;
            for (let i = 0; i < heights.length; i++) {
                let area_i = heights[i] * (right[i] - left[i] - 1);
                if (area_i > area) {
                    area = area_i;
                    l = left[i] + 1;
                    r = right[i] - 1;
                    this.height_i = heights[i];
                }
            }
            this.area = area;
            this.left = l;
            this.right = r;
        },
        reset: function () {
            var random = function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            var data = [];
            for (let i = 0; i < 10; i++) {
                data[i] = random(1, 10);
            }
            console.log('data-->', data);
            this.data = data;
        },
    }
}

  ngAfterContentInit() {
    // d3.select('h1').style('color', 'red');
    d3.select(document.getElementById('histogram')).append('histogram')
  }
  
  getLength() {
      return this.count;
  }

  push(item) {
      this.items.push(item);
      this.count = this.count + 1;
  }

  pop() {
      if (this.count > 0) {
          this.count = this.count - 1;
      }

      return this.items.pop();
  }

  peek() {
      return this.items.slice(-1)[0];
  }

  isEmpty() {
      return this.count === 0 ? true : false;
  }

  clear() {
      while (!this.isEmpty()) {
          this.pop();
      }
  }
}
