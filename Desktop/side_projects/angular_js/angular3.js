</head>
  <body ng-app="AppMarketApp">
    <div class="header">
      <div class="container">
        <h1>App Market</h1>
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">
         <div class="card">
           <app-info info="move"></app-info>
          <img class="icon" ng-src="{{ move.icon }}">
          <h2 class="title">{{ move.title }}</h2>
          <p class="developer">{{ move.developer }}</p>
          <p class="price">{{ move.price | currency }}</p>
        </div>
        <div class="card">
          <app-info info="forecast"></app-info>
        </div>
        <div class="card">
          <app-info info="shutterbugg"></app-info>
        </div>

        <div class="card">
          <app-info info="gameboard"></app-info>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

<script src="js/directives/appInfo.js"></script>


  </body>
</html>

app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
}]);
