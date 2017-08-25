ccDashBoard.controller("dashBoardController", [
  "$scope",
  "$window",
  "$timeout",
  "$location",
  "$anchorScroll",
  "$stateParams",
  "$state",
  "$filter",
  function(
    $scope,
    $window,
    $timeout,
    $location,
    $anchorScroll,
    $stateParams,
    $state,
    $filter
  ) {
    $scope.activeSection = "Processing";

    $scope.showOptions = function() {
      $(".arrowBox").slideToggle();
      //$(".down-arrow").css('display','none');
    };

    $scope.getActiveSection = function(value) {
      $scope.activeSection = value;
    };

    

    // Graph-1 chart section starts
    $.getJSON("/resources/worldMap.json", function(result) {
      // console.log(result.pieGraph);
      var dataArr = [];
      for (var obj of result.pieGraph) {
        //console.log("***",obj);
        dataArr.push(obj.name);
      }
      //console.log(dataArr);

      var option1 = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        toolbox: {
          show: true,
          x: "70%",
          y: "1%",
          feature: {
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "center",
                  max: 1548
                }
              }
            },
            restore: { show: true, title: "refresh" },
            saveAsImage: {
              show: true,
              title: "Download",
              type: "png",
              lang: ["click to save"]
            }
          }
        },
        title: {
          text: "",
          x: "center",
          y: "center"
        },
        legend: {
          orient: "horizontal",
          x: "center",
          y: "bottom",
          data: dataArr
        },
        series: [
          {
            name: "Access source",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: result.pieGraph
          }
        ]
      };
      //console.log(option2.series[0].data)
      myChart = echarts.init(document.getElementById("pieChart"));
      myChart.setOption(option1);
    }); //json file fetch closes here
    // Graph-1 pie chart section ends

    // Graph-2 wordcloud chart starts
    $.getJSON("/resources/worldMap.json", function(result) {
      var option2 = {
        title: {
          text: "Word Cloud",
          link: "",
          subtext: "",
          sublink: ""
        },
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 20,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: result.wordCloud
          }
        ]
      };

      //console.log(option2.series[0].data)
      wordChart = echarts.init(document.getElementById("wordCloud"));
      wordChart.setOption(option2);
    }); //json file fetch ends ends
    // Graph-2 ends

    //Grap-3 pie chart section starts
    
    $.getJSON("/resources/worldMap.json", function(result) {
      // console.log(result.pieGraph);
      var dataArr = [];
      for (var obj of result.pieGraph) {
        //console.log("***",obj);
        dataArr.push(obj.name);
      }
      //console.log(dataArr);

      var option3 = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        toolbox: {
          show: true,
          x: "70%",
          y: "1%",
          feature: {
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "center",
                  max: 1548
                }
              }
            },
            restore: { show: true, title: "refresh" },
            saveAsImage: {
              show: true,
              title: "Download",
              type: "png",
              lang: ["click to save"]
            }
          }
        },
        title: {
          text: "",
          x: "center",
          y: "center"
        },
        legend: {
          orient: "horizontal",
          x: "center",
          y: "bottom",
          data: dataArr
        },
        series: [
          {
            name: "Access source",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: result.pieGraph
          }
        ]
      };
      //console.log(option2.series[0].data)
      myChart = echarts.init(document.getElementById("pieChart2"));
      myChart.setOption(option3);
    }); //json file fetch closes here
    
    // Graph-3 pie chart section ends

    // Graph-4 wordcloud chart starts
      $.getJSON("/resources/worldMap.json", function(result) {
      var option4 = {
        title: {
          text: "Word Cloud",
          link: "",
          subtext: "",
          sublink: ""
        },
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 20,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: result.wordCloud
          }
        ]
      };

      //console.log(option2.series[0].data)
      wordChart = echarts.init(document.getElementById("wordCloud2"));
      wordChart.setOption(option4);
    }); //json file fetch ends ends
    
     // Graph-4 wordcloud chart starts

    $(window).resize(function() {
      // myChart.resize({
      //   width: "auto",
      //   heigth: "auto"
      // });

      // console.log(a, b, c);
    });

    //$(document).on("scroll", onScroll);
  }
]);
