"use strict";

import * as express from "express";

namespace Route {
  export class Index {
    public async main(_req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        res.json({
          statusCode: 200,
          statusMessage: "OK!",
        });
      } catch (e) {
        next(e);
      }
    }
  }
}

export = Route;
