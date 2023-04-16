// Inheritance
// import { MatchReader } from './inheritance/MatchReader';

// const reader = new MatchReader('football.csv');
// reader.read();

// console.log(reader.data[0]);


import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

//console.log(`Man United won ${0} games`);