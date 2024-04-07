// Imports
const express = require('express');
const res = require('express/lib/response');

// End of Imports

/**
 * ----------------------------------------------
 * Helpers
 * ----------------------------------------------
 */

/**
 * Takes two numbers, checks their types, and throws the appropriate error if necessary.
 *
 * @param num1
 * @param num2
 *
 * @returns {Exception|void}
 */
function handleNanErrorForTwoArgs(num1, num2) {
    if (typeof num1 !== 'number') {
        return throw new Error('num1 is not correctly defined');
    } else if (typeof num2 !== 'number') {
        return throw new Error('num2 is not correctly defined');
    }
}
/**
 * ----------------------------------------------
 * Server-side Calculator Microservice Logic
 * ----------------------------------------------
 */

const app = express();

/**
 * ----------------------------------------------
 * Handler Functions
 * ----------------------------------------------
 */

/**
 * Takes two numbers, adds them to each other, then returns the result.
 *
 * @param num1
 * @param num2
 *
 * @returns {number|null}
 */
const add = (num1, num2) => {
    if (num1 && num2) {
        return (num1 + num2);
    }

    return null;
};

/**
 * Takes two numbers, subtracts them from each other, then returns the result.
 *
 * @param num1
 * @param num2
 *
 * @returns {number|null}
 */
const subtract = (num1, num2) => {
    if (num1 && num2) {
        return (num1 - num2);
    }

    return null;
};

/**
 * Takes two numbers, multiplies them together, then returns the result.
 *
 * @param num1
 * @param num2
 *
 * @returns {number|null}
 */
const multiply = (num1, num2) => {
    if (num1 && num2) {
        return (num1 * num2);
    }

    return null;
};

/**
 * Takes two numbers, divides the first argument by the second, then returns the result.
 *
 * @param num1
 * @param num2
 *
 * @returns {number|null}
 */
const divide = (num1, num2) => {
    if (num1 && num2) {
        return (num1 / num2);
    }

    return null;
};

/**
 * ----------------------------------------------
 * API Endpoints
 * ----------------------------------------------
 */

/**
 * `GET Add Numbers` endpoint
 */
app.get('./add', (req, res) => {
    // err handling
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        handleNanErrorForTwoArgs(num1, num2);

        const result = add(num1, num2);
        res.status(200).json({httpCode: 200, data: result});
    } catch (error) {
        console.log(error);
        res.status(500).json({httpCode: 500, msg: error.toString()});
    }
});

/**
 * `GET Subtract Numbers` endpoint
 */
app.get('./subtract', (req, res) => {
    // err handling
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        handleNanErrorForTwoArgs(num1, num2);

        const result = add(num1, num2);
        res.status(200).json({httpCode: 200, data: result});
    } catch (error) {
        console.log(error);
        res.status(500).json({httpCode: 500, msg: error.toString()});
    }
});

/**
 * `Get Multiply Numbers` endpoint
 */
app.get('./multiply', (req, res) => {
    // err handling
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        handleNanErrorForTwoArgs(num1, num2);

        const result = add(num1, num2);
        res.status(200).json({httpCode: 200, data: result});
    } catch (error) {
        console.log(error);
        res.status(500).json({httpCode: 500, msg: error.toString()});
    }
});

/**
 * `GET divide numbers` endpoint
 */
app.get('./divide', (req, res) => {
    // err handling
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        handleNanErrorForTwoArgs(num1, num2);

        const result = add(num1, num2);
        res.status(200).json({httpCode: 200, data: result});
    } catch (error) {
        console.log(error);
        res.status(500).json({httpCode: 500, msg: error.toString()});
    }
});