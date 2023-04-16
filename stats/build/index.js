"use strict";
// Inheritance
// import { MatchReader } from './inheritance/MatchReader';
Object.defineProperty(exports, "__esModule", { value: true });
// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
//console.log(`Man United won ${0} games`);
