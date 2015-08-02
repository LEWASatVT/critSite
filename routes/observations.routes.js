var express = require('express'),
    router = express.Router(),
    ObservationController = require('../controllers/observation.controller');

router.route('/').get(ObservationController.showNearbyObservations);

module.exports = router;
