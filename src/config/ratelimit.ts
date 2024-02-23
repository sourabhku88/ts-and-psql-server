import { Application } from 'express'
import { rateLimit } from 'express-rate-limit'

export const customRateLimit = (app: Application) => {
    app.use(rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minutes
        limit: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
        standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    }))
}