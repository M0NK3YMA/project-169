AFRAME.registerComponent("marker-handler", {
    init: async function () {
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found")
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost")
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderButton = document.getElementById("order-button");
      var orderSummaryButtton = document.getElementById("order-summary-button");
  
      // Handling Click Events
      orderButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Thanks for the Order!",
          text: "Order is coming soon"
        });
      });
  
      orderSummaryButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Here's a order summary..",
          text: "Your order will be delivered soon"
        });
      });
    },
  
    handleMarkerLost: function () {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });