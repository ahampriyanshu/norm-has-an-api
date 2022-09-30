const catchAsync = require("../helpers/catchAsync"),
  where = require("lodash"),
  _ = require("underscore"),
  thisYear = new Date().getFullYear(),
  fs = require("fs");

const parsedJSON = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
let filteredData;

const validateInt = (integer) => {
  if (parseInt(integer, 10).toString() === integer) return parseInt(integer);
  throw {
    code: 400,
    name: "Bad Request",
    message: "Only integers are allowed",
  };
};

const validateString = (string) => {
  const str = where.lowerCase(string).replace(/\s/g, "");
  if (!/[^a-zA-Z]/.test(str)) return str;
  throw {
    code: 400,
    name: "Bad Request",
    message: "Only alphabets are allowed",
  };
};

const validateData = (rawData) => {
  if (rawData && rawData.length !== 0) return rawData;
  throw {
    code: 404,
    name: "Not Found",
    message:
      "No such comic exist in the database, but you can always add one :)",
  };
};

exports.fetchAll = catchAsync(async (req, res, next) => {
  try {
    const keys = Object.keys(parsedJSON),
      query = validateInt(req.params.query) || 1,
      limit = query > keys?.length ? keys.length : query,
      filteredData = new Array(limit);
    let object;
    for (let i = 0; i < limit; i++) {
      do {
        object = parsedJSON[keys[Math.floor(keys.length * Math.random())]];
      } while (filteredData.indexOf(object) > -1);
      filteredData[i] = object;
    }
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchByName = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query),
      filteredData = _.where(parsedJSON, { name: query });
    res.send(validateData(filteredData[0]));
  } catch (e) {
    next(e);
  }
});

exports.fetchByNationality = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query),
      filteredData = _.where(parsedJSON, { nationality: query });
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchByEthnicity = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query);
    const filteredData = parsedJSON
      .filter((comic) => comic.ethnicity != null)
      .filter((comic) => comic.ethnicity.includes(query));
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchById = catchAsync(async (req, res, next) => {
  try {
    const query = validateInt(req.params.query),
      filteredData = _.where(parsedJSON, { id: query });
    res.json(validateData(filteredData[0]));
  } catch (e) {
    next(e);
  }
});

exports.fetchByAge = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query),
      age = validateInt(req.params.age);
    if (query === "min") {
      filteredData = _.filter(
        parsedJSON,
        ({ dateOfBirth }) => thisYear - dateOfBirth.split("-")[0] >= age
      );
    } else if (query === "max") {
      filteredData = _.filter(
        parsedJSON,
        ({ dateOfBirth }) => thisYear - dateOfBirth.split("-")[0] <= age
      );
    } else {
      throw {
        code: 400,
        name: "Bad Request",
        message: "Only `min` and `max` are allowed as params for this route",
      };
    }
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchByYear = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query),
      year = validateInt(req.params.year);

    if (query === "after") {
      filteredData = _.filter(
        parsedJSON,
        ({ dateOfBirth }) => dateOfBirth.split("-")[0] > year
      );
    } else if (query === "before") {
      filteredData = _.filter(
        parsedJSON,
        ({ dateOfBirth }) => dateOfBirth.split("-")[0] < year
      );
    } else {
      throw {
        code: 400,
        name: "Bad Request",
        message:
          "Only `before` and `after` are the allowed params for this route",
      };
    }
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchIsAlive = catchAsync(async (req, res, next) => {
  try {
    const query = validateString(req.params.query);

    if (query === "true") {
      filteredData = _.where(parsedJSON, { isAlive: true });
    } else if (query === "false") {
      filteredData = _.where(parsedJSON, { isAlive: false });
    } else {
      throw {
        code: 400,
        name: "Bad Request",
        message:
          "Only `true` and `false` are the allowed params for this route",
      };
    }
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});

exports.fetchSince = catchAsync(async (req, res, next) => {
  try {
    const query = validateInt(req.params.query),
      filteredData = _.filter(
        parsedJSON,
        ({ workingSince }) => workingSince >= query
      );
    res.send(validateData(filteredData));
  } catch (e) {
    next(e);
  }
});
