"use strict";

import * as express from "express";
import fetch from "node-fetch";
import * as phq from "predicthq";

import getGeolocation from "../../methods/getGeolocation";

namespace Route {
  export class Index {
    private client = new phq.Client({
      access_token: process.env.PREDICT_HQ_ACCESS_TOKEN,
      fetch,
    });

    public async main(req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        let date = new Date();
        let location = await getGeolocation(req.query.ip);

        let results = await this.client.events.search({
          "category": "disasters,severe-weather",
          "country": req.query.country,
          "label": "disaster-warning,weather-warning",
          "location_around.origin": location.lat + "," + location.lon,
          "offset": req.query.radius || 0,
          "start.gte": date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate(),
        });

        res.json(results);
      } catch (e) {
        next(e);
      }
    }
  }
}

export = Route;
