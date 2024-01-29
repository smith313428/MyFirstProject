import React, {  Fragment ,useEffect,useState,useMemo} from "react";
import { Row, Button, Card, CardBody, Table,Input, Label } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { DateRangePicker } from 'react-date-range';
import moment from "moment";
import ReactExport from "react-export-excel";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import Select from "react-select";
import Chart from 'react-apexcharts'
// import WorldMap from "react-svg-worldmap";
import { VectorMap } from "react-jvectormap"

import {data_21_6_1_22_7_30,

  data_21_01_01_5m, 
  data_21_01_02_5m, 
  data_21_01_03_5m, 
  data_21_01_04_5m, 
  data_21_01_05_5m, 
  data_21_01_06_5m, 
  data_21_01_07_5m, 
  data_21_01_08_5m, 
  data_21_01_09_5m, 
  data_21_01_10_5m, 
  data_21_01_11_5m, 
  data_21_01_12_5m, 
  data_21_01_13_5m, 
  data_21_01_14_5m, 
  data_21_01_15_5m, 
  data_21_01_16_5m, 
  data_21_01_17_5m, 
  data_21_01_18_5m, 
  data_21_01_19_5m, 
  data_21_01_20_5m, 
  data_21_01_21_5m, 
  data_21_01_22_5m, 
  data_21_01_23_5m, 
  data_21_01_24_5m, 
  data_21_01_25_5m, 
  data_21_01_26_5m, 
  data_21_01_27_5m, 
  data_21_01_28_5m, 
  data_21_01_29_5m, 
  data_21_01_30_5m,
  data_21_01_31_5m,

  data_21_02_01_5m, 
  data_21_02_02_5m, 
  data_21_02_03_5m, 
  data_21_02_04_5m, 
  data_21_02_05_5m, 
  data_21_02_06_5m, 
  data_21_02_07_5m, 
  data_21_02_08_5m, 
  data_21_02_09_5m, 
  data_21_02_10_5m, 
  data_21_02_11_5m, 
  data_21_02_12_5m, 
  data_21_02_13_5m, 
  data_21_02_14_5m, 
  data_21_02_15_5m, 
  data_21_02_16_5m, 
  data_21_02_17_5m, 
  data_21_02_18_5m, 
  data_21_02_19_5m, 
  data_21_02_20_5m, 
  data_21_02_21_5m, 
  data_21_02_22_5m, 
  data_21_02_23_5m, 
  data_21_02_24_5m, 
  data_21_02_25_5m, 
  data_21_02_26_5m, 
  data_21_02_27_5m, 
  data_21_02_28_5m, 

  data_21_03_01_5m, 
  data_21_03_02_5m, 
  data_21_03_03_5m, 
  data_21_03_04_5m, 
  data_21_03_05_5m, 
  data_21_03_06_5m, 
  data_21_03_07_5m, 
  data_21_03_08_5m, 
  data_21_03_09_5m, 
  data_21_03_10_5m, 
  data_21_03_11_5m, 
  data_21_03_12_5m, 
  data_21_03_13_5m, 
  data_21_03_14_5m, 
  data_21_03_15_5m, 
  data_21_03_16_5m, 
  data_21_03_17_5m, 
  data_21_03_18_5m, 
  data_21_03_19_5m, 
  data_21_03_20_5m, 
  data_21_03_21_5m, 
  data_21_03_22_5m, 
  data_21_03_23_5m, 
  data_21_03_24_5m, 
  data_21_03_25_5m, 
  data_21_03_26_5m, 
  data_21_03_27_5m, 
  data_21_03_28_5m, 
  data_21_03_29_5m, 
  data_21_03_30_5m,
  data_21_03_31_5m,

  
  data_21_04_01_5m, 
  data_21_04_02_5m, 
  data_21_04_03_5m, 
  data_21_04_04_5m, 
  data_21_04_05_5m, 
  data_21_04_06_5m, 
  data_21_04_07_5m, 
  data_21_04_08_5m, 
  data_21_04_09_5m, 
  data_21_04_10_5m, 
  data_21_04_11_5m, 
  data_21_04_12_5m, 
  data_21_04_13_5m, 
  data_21_04_14_5m, 
  data_21_04_15_5m, 
  data_21_04_16_5m, 
  data_21_04_17_5m, 
  data_21_04_18_5m, 
  data_21_04_19_5m, 
  data_21_04_20_5m, 
  data_21_04_21_5m, 
  data_21_04_22_5m, 
  data_21_04_23_5m, 
  data_21_04_24_5m, 
  data_21_04_25_5m, 
  data_21_04_26_5m, 
  data_21_04_27_5m, 
  data_21_04_28_5m, 
  data_21_04_29_5m, 
  data_21_04_30_5m, 

  data_21_05_01_5m, 
  data_21_05_02_5m, 
  data_21_05_03_5m, 
  data_21_05_04_5m, 
  data_21_05_05_5m, 
  data_21_05_06_5m, 
  data_21_05_07_5m, 
  data_21_05_08_5m, 
  data_21_05_09_5m, 
  data_21_05_10_5m, 
  data_21_05_11_5m, 
  data_21_05_12_5m, 
  data_21_05_13_5m, 
  data_21_05_14_5m, 
  data_21_05_15_5m, 
  data_21_05_16_5m, 
  data_21_05_17_5m, 
  data_21_05_18_5m, 
  data_21_05_19_5m, 
  data_21_05_20_5m, 
  data_21_05_21_5m, 
  data_21_05_22_5m, 
  data_21_05_23_5m, 
  data_21_05_24_5m, 
  data_21_05_25_5m, 
  data_21_05_26_5m, 
  data_21_05_27_5m, 
  data_21_05_28_5m, 
  data_21_05_29_5m, 
  data_21_05_30_5m, 
  data_21_05_31_5m,

  data_21_06_01_5m, 
  data_21_06_02_5m, 
  data_21_06_03_5m, 
  data_21_06_04_5m, 
  data_21_06_05_5m, 
  data_21_06_06_5m, 
  data_21_06_07_5m, 
  data_21_06_08_5m, 
  data_21_06_09_5m, 
  data_21_06_10_5m, 
  data_21_06_11_5m, 
  data_21_06_12_5m, 
  data_21_06_13_5m, 
  data_21_06_14_5m, 
  data_21_06_15_5m, 
  data_21_06_16_5m, 
  data_21_06_17_5m, 
  data_21_06_18_5m, 
  data_21_06_19_5m, 
  data_21_06_20_5m, 
  data_21_06_21_5m, 
  data_21_06_22_5m, 
  data_21_06_23_5m, 
  data_21_06_24_5m, 
  data_21_06_25_5m, 
  data_21_06_26_5m, 
  data_21_06_27_5m, 
  data_21_06_28_5m, 
  data_21_06_29_5m, 
  data_21_06_30_5m, 

  data_21_07_01_5m, 
  data_21_07_02_5m, 
  data_21_07_03_5m, 
  data_21_07_04_5m, 
  data_21_07_05_5m, 
  data_21_07_06_5m, 
  data_21_07_07_5m, 
  data_21_07_08_5m, 
  data_21_07_09_5m, 
  data_21_07_10_5m, 
  data_21_07_11_5m, 
  data_21_07_12_5m, 
  data_21_07_13_5m, 
  data_21_07_14_5m, 
  data_21_07_15_5m, 
  data_21_07_16_5m, 
  data_21_07_17_5m, 
  data_21_07_18_5m, 
  data_21_07_19_5m, 
  data_21_07_20_5m, 
  data_21_07_21_5m, 
  data_21_07_22_5m, 
  data_21_07_23_5m, 
  data_21_07_24_5m, 
  data_21_07_25_5m, 
  data_21_07_26_5m, 
  data_21_07_27_5m, 
  data_21_07_28_5m, 
  data_21_07_29_5m, 
  data_21_07_30_5m, 
  data_21_07_31_5m, 
 
  data_21_08_01_5m, 
  data_21_08_02_5m, 
  data_21_08_03_5m, 
  data_21_08_04_5m, 
  data_21_08_05_5m, 
  data_21_08_06_5m, 
  data_21_08_07_5m, 
  data_21_08_08_5m, 
  data_21_08_09_5m, 
  data_21_08_10_5m, 
  data_21_08_11_5m, 
  data_21_08_12_5m, 
  data_21_08_13_5m, 
  data_21_08_14_5m, 
  data_21_08_15_5m, 
  data_21_08_16_5m, 
  data_21_08_17_5m, 
  data_21_08_18_5m, 
  data_21_08_19_5m, 
  data_21_08_20_5m, 
  data_21_08_21_5m, 
  data_21_08_22_5m, 
  data_21_08_23_5m, 
  data_21_08_24_5m, 
  data_21_08_25_5m, 
  data_21_08_26_5m, 
  data_21_08_27_5m, 
  data_21_08_28_5m, 
  data_21_08_29_5m, 
  data_21_08_30_5m, 
  data_21_08_31_5m, 

  data_21_09_01_5m, 
  data_21_09_02_5m, 
  data_21_09_03_5m, 
  data_21_09_04_5m, 
  data_21_09_05_5m, 
  data_21_09_06_5m, 
  data_21_09_07_5m, 
  data_21_09_08_5m, 
  data_21_09_09_5m, 
  data_21_09_10_5m, 
  data_21_09_11_5m, 
  data_21_09_12_5m, 
  data_21_09_13_5m, 
  data_21_09_14_5m, 
  data_21_09_15_5m, 
  data_21_09_16_5m, 
  data_21_09_17_5m, 
  data_21_09_18_5m, 
  data_21_09_19_5m, 
  data_21_09_20_5m, 
  data_21_09_21_5m, 
  data_21_09_22_5m, 
  data_21_09_23_5m, 
  data_21_09_24_5m, 
  data_21_09_25_5m, 
  data_21_09_26_5m, 
  data_21_09_27_5m, 
  data_21_09_28_5m, 
  data_21_09_29_5m, 
  data_21_09_30_5m,

  data_21_10_01_5m, 
  data_21_10_02_5m, 
  data_21_10_03_5m, 
  data_21_10_04_5m, 
  data_21_10_05_5m, 
  data_21_10_06_5m, 
  data_21_10_07_5m, 
  data_21_10_08_5m, 
  data_21_10_09_5m, 
  data_21_10_10_5m, 
  data_21_10_11_5m, 
  data_21_10_12_5m, 
  data_21_10_13_5m, 
  data_21_10_14_5m, 
  data_21_10_15_5m, 
  data_21_10_16_5m, 
  data_21_10_17_5m, 
  data_21_10_18_5m, 
  data_21_10_19_5m, 
  data_21_10_20_5m, 
  data_21_10_21_5m, 
  data_21_10_22_5m, 
  data_21_10_23_5m, 
  data_21_10_24_5m, 
  data_21_10_25_5m, 
  data_21_10_26_5m, 
  data_21_10_27_5m, 
  data_21_10_28_5m, 
  data_21_10_29_5m, 
  data_21_10_30_5m, 
  data_21_10_31_5m, 

  data_21_11_01_5m, 
  data_21_11_02_5m, 
  data_21_11_03_5m, 
  data_21_11_04_5m, 
  data_21_11_05_5m, 
  data_21_11_06_5m, 
  data_21_11_07_5m, 
  data_21_11_08_5m, 
  data_21_11_09_5m, 
  data_21_11_10_5m, 
  data_21_11_11_5m, 
  data_21_11_12_5m, 
  data_21_11_13_5m, 
  data_21_11_14_5m, 
  data_21_11_15_5m, 
  data_21_11_16_5m, 
  data_21_11_17_5m, 
  data_21_11_18_5m, 
  data_21_11_19_5m, 
  data_21_11_20_5m, 
  data_21_11_21_5m, 
  data_21_11_22_5m, 
  data_21_11_23_5m, 
  data_21_11_24_5m, 
  data_21_11_25_5m, 
  data_21_11_26_5m, 
  data_21_11_27_5m, 
  data_21_11_28_5m, 
  data_21_11_29_5m, 
  data_21_11_30_5m, 

  data_21_12_01_5m, 
  data_21_12_02_5m, 
  data_21_12_03_5m, 
  data_21_12_04_5m, 
  data_21_12_05_5m, 
  data_21_12_06_5m, 
  data_21_12_07_5m, 
  data_21_12_08_5m, 
  data_21_12_09_5m, 
  data_21_12_10_5m, 
  data_21_12_11_5m, 
  data_21_12_12_5m, 
  data_21_12_13_5m, 
  data_21_12_14_5m, 
  data_21_12_15_5m, 
  data_21_12_16_5m, 
  data_21_12_17_5m, 
  data_21_12_18_5m, 
  data_21_12_19_5m, 
  data_21_12_20_5m, 
  data_21_12_21_5m, 
  data_21_12_22_5m, 
  data_21_12_23_5m, 
  data_21_12_24_5m, 
  data_21_12_25_5m, 
  data_21_12_26_5m, 
  data_21_12_27_5m, 
  data_21_12_28_5m, 
  data_21_12_29_5m, 
  data_21_12_30_5m, 
  data_21_12_31_5m, 



  data_22_01_01_5m, 
  data_22_01_02_5m, 
  data_22_01_03_5m, 
  data_22_01_04_5m, 
  data_22_01_05_5m, 
  data_22_01_06_5m, 
  data_22_01_07_5m, 
  data_22_01_08_5m, 
  data_22_01_09_5m, 
  data_22_01_10_5m, 
  data_22_01_11_5m, 
  data_22_01_12_5m, 
  data_22_01_13_5m, 
  data_22_01_14_5m, 
  data_22_01_15_5m, 
  data_22_01_16_5m, 
  data_22_01_17_5m, 
  data_22_01_18_5m, 
  data_22_01_19_5m, 
  data_22_01_20_5m, 
  data_22_01_21_5m, 
  data_22_01_22_5m, 
  data_22_01_23_5m, 
  data_22_01_24_5m, 
  data_22_01_25_5m, 
  data_22_01_26_5m, 
  data_22_01_27_5m, 
  data_22_01_28_5m, 
  data_22_01_29_5m, 
  data_22_01_30_5m,
  data_22_01_31_5m,

  data_22_02_01_5m, 
  data_22_02_02_5m, 
  data_22_02_03_5m, 
  data_22_02_04_5m, 
  data_22_02_05_5m, 
  data_22_02_06_5m, 
  data_22_02_07_5m, 
  data_22_02_08_5m, 
  data_22_02_09_5m, 
  data_22_02_10_5m, 
  data_22_02_11_5m, 
  data_22_02_12_5m, 
  data_22_02_13_5m, 
  data_22_02_14_5m, 
  data_22_02_15_5m, 
  data_22_02_16_5m, 
  data_22_02_17_5m, 
  data_22_02_18_5m, 
  data_22_02_19_5m, 
  data_22_02_20_5m, 
  data_22_02_21_5m, 
  data_22_02_22_5m, 
  data_22_02_23_5m, 
  data_22_02_24_5m, 
  data_22_02_25_5m, 
  data_22_02_26_5m, 
  data_22_02_27_5m, 
  data_22_02_28_5m, 

  data_22_03_01_5m, 
  data_22_03_02_5m, 
  data_22_03_03_5m, 
  data_22_03_04_5m, 
  data_22_03_05_5m, 
  data_22_03_06_5m, 
  data_22_03_07_5m, 
  data_22_03_08_5m, 
  data_22_03_09_5m, 
  data_22_03_10_5m, 
  data_22_03_11_5m, 
  data_22_03_12_5m, 
  data_22_03_13_5m, 
  data_22_03_14_5m, 
  data_22_03_15_5m, 
  data_22_03_16_5m, 
  data_22_03_17_5m, 
  data_22_03_18_5m, 
  data_22_03_19_5m, 
  data_22_03_20_5m, 
  data_22_03_21_5m, 
  data_22_03_22_5m, 
  data_22_03_23_5m, 
  data_22_03_24_5m, 
  data_22_03_25_5m, 
  data_22_03_26_5m, 
  data_22_03_27_5m, 
  data_22_03_28_5m, 
  data_22_03_29_5m, 
  data_22_03_30_5m,
  data_22_03_31_5m,

  
  data_22_04_01_5m, 
  data_22_04_02_5m, 
  data_22_04_03_5m, 
  data_22_04_04_5m, 
  data_22_04_05_5m, 
  data_22_04_06_5m, 
  data_22_04_07_5m, 
  data_22_04_08_5m, 
  data_22_04_09_5m, 
  data_22_04_10_5m, 
  data_22_04_11_5m, 
  data_22_04_12_5m, 
  data_22_04_13_5m, 
  data_22_04_14_5m, 
  data_22_04_15_5m, 
  data_22_04_16_5m, 
  data_22_04_17_5m, 
  data_22_04_18_5m, 
  data_22_04_19_5m, 
  data_22_04_20_5m, 
  data_22_04_21_5m, 
  data_22_04_22_5m, 
  data_22_04_23_5m, 
  data_22_04_24_5m, 
  data_22_04_25_5m, 
  data_22_04_26_5m, 
  data_22_04_27_5m, 
  data_22_04_28_5m, 
  data_22_04_29_5m, 
  data_22_04_30_5m, 

  data_22_05_01_5m, 
  data_22_05_02_5m, 
  data_22_05_03_5m, 
  data_22_05_04_5m, 
  data_22_05_05_5m, 
  data_22_05_06_5m, 
  data_22_05_07_5m, 
  data_22_05_08_5m, 
  data_22_05_09_5m, 
  data_22_05_10_5m, 
  data_22_05_11_5m, 
  data_22_05_12_5m, 
  data_22_05_13_5m, 
  data_22_05_14_5m, 
  data_22_05_15_5m, 
  data_22_05_16_5m, 
  data_22_05_17_5m, 
  data_22_05_18_5m, 
  data_22_05_19_5m, 
  data_22_05_20_5m, 
  data_22_05_21_5m, 
  data_22_05_22_5m, 
  data_22_05_23_5m, 
  data_22_05_24_5m, 
  data_22_05_25_5m, 
  data_22_05_26_5m, 
  data_22_05_27_5m, 
  data_22_05_28_5m, 
  data_22_05_29_5m, 
  data_22_05_30_5m, 
  data_22_05_31_5m,

  data_22_06_01_5m, 
  data_22_06_02_5m, 
  data_22_06_03_5m, 
  data_22_06_04_5m, 
  data_22_06_05_5m, 
  data_22_06_06_5m, 
  data_22_06_07_5m, 
  data_22_06_08_5m, 
  data_22_06_09_5m, 
  data_22_06_10_5m, 
  data_22_06_11_5m, 
  data_22_06_12_5m, 
  data_22_06_13_5m, 
  data_22_06_14_5m, 
  data_22_06_15_5m, 
  data_22_06_16_5m, 
  data_22_06_17_5m, 
  data_22_06_18_5m, 
  data_22_06_19_5m, 
  data_22_06_20_5m, 
  data_22_06_21_5m, 
  data_22_06_22_5m, 
  data_22_06_23_5m, 
  data_22_06_24_5m, 
  data_22_06_25_5m, 
  data_22_06_26_5m, 
  data_22_06_27_5m, 
  data_22_06_28_5m, 
  data_22_06_29_5m, 
  data_22_06_30_5m, 

  data_22_07_01_5m, 
  data_22_07_02_5m, 
  data_22_07_03_5m, 
  data_22_07_04_5m, 
  data_22_07_05_5m, 
  data_22_07_06_5m, 
  data_22_07_07_5m, 
  data_22_07_08_5m, 
  data_22_07_09_5m, 
  data_22_07_10_5m, 
  data_22_07_11_5m, 
  data_22_07_12_5m, 
  data_22_07_13_5m, 
  data_22_07_14_5m, 
  data_22_07_15_5m, 
  data_22_07_16_5m, 
  data_22_07_17_5m, 
  data_22_07_18_5m, 
  data_22_07_19_5m, 
  data_22_07_20_5m, 
  data_22_07_21_5m, 
  data_22_07_22_5m, 
  data_22_07_23_5m, 
  data_22_07_24_5m, 
  data_22_07_25_5m, 
  data_22_07_26_5m, 
  data_22_07_27_5m, 
  data_22_07_28_5m, 
  data_22_07_29_5m, 
  data_22_07_30_5m, 
  data_22_07_31_5m, 
 
  data_22_08_01_5m, 
  data_22_08_02_5m, 
  data_22_08_03_5m, 
  data_22_08_04_5m, 
  data_22_08_05_5m, 
  data_22_08_06_5m, 
  data_22_08_07_5m, 
  data_22_08_08_5m, 
  data_22_08_09_5m, 
  data_22_08_10_5m, 
  data_22_08_11_5m, 
  data_22_08_12_5m, 
  data_22_08_13_5m, 
  data_22_08_14_5m, 
  data_22_08_15_5m, 
  data_22_08_16_5m, 
  data_22_08_17_5m, 
  data_22_08_18_5m, 
  data_22_08_19_5m, 
  data_22_08_20_5m, 
  data_22_08_21_5m, 
  data_22_08_22_5m, 
  data_22_08_23_5m, 
  data_22_08_24_5m, 
  data_22_08_25_5m, 
  data_22_08_26_5m, 
  data_22_08_27_5m, 
  data_22_08_28_5m, 
  data_22_08_29_5m, 
  data_22_08_30_5m, 
  data_22_08_31_5m, 

  data_22_09_01_5m, 
  data_22_09_02_5m, 
  data_22_09_03_5m, 
  data_22_09_04_5m, 
  data_22_09_05_5m, 
  data_22_09_06_5m, 
  data_22_09_07_5m, 
  data_22_09_08_5m, 
  data_22_09_09_5m, 
  data_22_09_10_5m, 
  data_22_09_11_5m, 
  data_22_09_12_5m, 
  data_22_09_13_5m, 
  data_22_09_14_5m, 
  data_22_09_15_5m, 
  data_22_09_16_5m, 
  data_22_09_17_5m, 
  data_22_09_18_5m, 
  data_22_09_19_5m, 
  data_22_09_20_5m, 
  data_22_09_21_5m, 
  data_22_09_22_5m, 
  data_22_09_23_5m, 
  data_22_09_24_5m, 
  data_22_09_25_5m, 
  data_22_09_26_5m, 
  data_22_09_27_5m, 
  data_22_09_28_5m, 
  data_22_09_29_5m, 
  data_22_09_30_5m, 

  data_22_10_01_5m, 
  data_22_10_02_5m, 
  data_22_10_03_5m, 
  data_22_10_04_5m, 
  data_22_10_05_5m, 
  data_22_10_06_5m, 
  data_22_10_07_5m, 
  data_22_10_08_5m, 
  data_22_10_09_5m, 
  data_22_10_10_5m, 
  data_22_10_11_5m, 
  data_22_10_12_5m, 
  data_22_10_13_5m, 
  data_22_10_14_5m, 
  data_22_10_15_5m, 
  data_22_10_16_5m, 
  data_22_10_17_5m, 
  data_22_10_18_5m, 
  data_22_10_19_5m, 
  data_22_10_20_5m, 
  data_22_10_21_5m, 
  data_22_10_22_5m, 
  data_22_10_23_5m, 
  data_22_10_24_5m, 
  data_22_10_25_5m, 
  data_22_10_26_5m, 
  data_22_10_27_5m, 
  data_22_10_28_5m, 
  data_22_10_29_5m, 
  data_22_10_30_5m, 
  data_22_10_31_5m, 

  data_22_11_01_5m, 
  data_22_11_02_5m, 
  data_22_11_03_5m, 
  data_22_11_04_5m, 
  data_22_11_05_5m, 
  data_22_11_06_5m, 
  data_22_11_07_5m, 
  data_22_11_08_5m, 
  data_22_11_09_5m, 
  data_22_11_10_5m, 
  data_22_11_11_5m, 
  data_22_11_12_5m, 
  data_22_11_13_5m, 
  data_22_11_14_5m, 
  data_22_11_15_5m, 
  data_22_11_16_5m, 
  data_22_11_17_5m, 
  data_22_11_18_5m, 
  data_22_11_19_5m, 
  data_22_11_20_5m, 
  data_22_11_21_5m, 
  data_22_11_22_5m, 
  data_22_11_23_5m, 
  data_22_11_24_5m, 
  data_22_11_25_5m, 
  data_22_11_26_5m, 
  data_22_11_27_5m, 
  data_22_11_28_5m, 
  data_22_11_29_5m, 
  data_22_11_30_5m,

  data_22_12_01_5m, 
  data_22_12_02_5m, 
  data_22_12_03_5m, 
  data_22_12_04_5m, 
  data_22_12_05_5m, 
  data_22_12_06_5m, 
  data_22_12_07_5m, 
  data_22_12_08_5m, 
  data_22_12_09_5m, 
  data_22_12_10_5m, 
  data_22_12_11_5m, 
  data_22_12_12_5m, 
  data_22_12_13_5m, 
  data_22_12_14_5m, 
  data_22_12_15_5m, 
  data_22_12_16_5m, 
  // data_22_12_17_5m, 
  // data_22_12_18_5m, 
  // data_22_12_19_5m, 
  // data_22_12_20_5m, 
  // data_22_12_21_5m, 
  // data_22_12_22_5m, 
  // data_22_12_23_5m, 
  // data_22_12_24_5m, 
  // data_22_12_25_5m, 
  // data_22_12_26_5m, 
  // data_22_12_27_5m, 
  // data_22_12_28_5m, 
  // data_22_12_29_5m, 
  // data_22_12_30_5m,
  // data_22_12_31_5m,
  
} from "../../../data/prices";
import { daysInWeek } from "date-fns";
const dataTempOld=data_21_6_1_22_7_30
const dayData=data_22_07_31_5m

const daysData_21_01_t=
  data_21_01_01_5m
  .concat(data_21_01_02_5m)
  .concat(data_21_01_03_5m)
  .concat(data_21_01_04_5m)
  .concat(data_21_01_05_5m)
  .concat(data_21_01_06_5m)
  .concat(data_21_01_07_5m)
  .concat(data_21_01_08_5m)
  .concat(data_21_01_09_5m)
  .concat(data_21_01_10_5m)
  .concat(data_21_01_11_5m)
  .concat(data_21_01_12_5m)
  .concat(data_21_01_13_5m)
  .concat(data_21_01_14_5m)
  .concat(data_21_01_15_5m)
  .concat(data_21_01_16_5m)
  .concat(data_21_01_17_5m)
  .concat(data_21_01_18_5m)
  .concat(data_21_01_19_5m)
  .concat(data_21_01_20_5m)
  .concat(data_21_01_21_5m)
  .concat(data_21_01_22_5m)
  .concat(data_21_01_23_5m)
  .concat(data_21_01_24_5m)
  .concat(data_21_01_25_5m)
  .concat(data_21_01_26_5m)
  .concat(data_21_01_27_5m)
  .concat(data_21_01_28_5m)
  .concat(data_21_01_29_5m)
  .concat(data_21_01_30_5m)
  .concat(data_21_01_31_5m)

const daysData_21_02_t=
  data_21_02_01_5m
  .concat(data_21_02_02_5m)
  .concat(data_21_02_03_5m)
  .concat(data_21_02_04_5m)
  .concat(data_21_02_05_5m)
  .concat(data_21_02_06_5m)
  .concat(data_21_02_07_5m)
  .concat(data_21_02_08_5m)
  .concat(data_21_02_09_5m)
  .concat(data_21_02_10_5m)
  .concat(data_21_02_11_5m)
  .concat(data_21_02_12_5m)
  .concat(data_21_02_13_5m)
  .concat(data_21_02_14_5m)
  .concat(data_21_02_15_5m)
  .concat(data_21_02_16_5m)
  .concat(data_21_02_17_5m)
  .concat(data_21_02_18_5m)
  .concat(data_21_02_19_5m)
  .concat(data_21_02_20_5m)
  .concat(data_21_02_21_5m)
  .concat(data_21_02_22_5m)
  .concat(data_21_02_23_5m)
  .concat(data_21_02_24_5m)
  .concat(data_21_02_25_5m)
  .concat(data_21_02_26_5m)
  .concat(data_21_02_27_5m)
  .concat(data_21_02_28_5m)

const daysData_21_03_t=
  data_21_03_01_5m
  .concat(data_21_03_02_5m)
  .concat(data_21_03_03_5m)
  .concat(data_21_03_04_5m)
  .concat(data_21_03_05_5m)
  .concat(data_21_03_06_5m)
  .concat(data_21_03_07_5m)
  .concat(data_21_03_08_5m)
  .concat(data_21_03_09_5m)
  .concat(data_21_03_10_5m)
  .concat(data_21_03_11_5m)
  .concat(data_21_03_12_5m)
  .concat(data_21_03_13_5m)
  .concat(data_21_03_14_5m)
  .concat(data_21_03_15_5m)
  .concat(data_21_03_16_5m)
  .concat(data_21_03_17_5m)
  .concat(data_21_03_18_5m)
  .concat(data_21_03_19_5m)
  .concat(data_21_03_20_5m)
  .concat(data_21_03_21_5m)
  .concat(data_21_03_22_5m)
  .concat(data_21_03_23_5m)
  .concat(data_21_03_24_5m)
  .concat(data_21_03_25_5m)
  .concat(data_21_03_26_5m)
  .concat(data_21_03_27_5m)
  .concat(data_21_03_28_5m)
  .concat(data_21_03_29_5m)
  .concat(data_21_03_30_5m)
  .concat(data_21_03_31_5m)

const daysData_21_04_t=
  data_21_04_01_5m
  .concat(data_21_04_02_5m)
  .concat(data_21_04_03_5m)
  .concat(data_21_04_04_5m)
  .concat(data_21_04_05_5m)
  .concat(data_21_04_06_5m)
  .concat(data_21_04_07_5m)
  .concat(data_21_04_08_5m)
  .concat(data_21_04_09_5m)
  .concat(data_21_04_10_5m)
  .concat(data_21_04_11_5m)
  .concat(data_21_04_12_5m)
  .concat(data_21_04_13_5m)
  .concat(data_21_04_14_5m)
  .concat(data_21_04_15_5m)
  .concat(data_21_04_16_5m)
  .concat(data_21_04_17_5m)
  .concat(data_21_04_18_5m)
  .concat(data_21_04_19_5m)
  .concat(data_21_04_20_5m)
  .concat(data_21_04_21_5m)
  .concat(data_21_04_22_5m)
  .concat(data_21_04_23_5m)
  .concat(data_21_04_24_5m)
  .concat(data_21_04_25_5m)
  .concat(data_21_04_26_5m)
  .concat(data_21_04_27_5m)
  .concat(data_21_04_28_5m)
  .concat(data_21_04_29_5m)
  .concat(data_21_04_30_5m)

const daysData_21_05_t=
  data_21_05_01_5m
  .concat(data_21_05_02_5m)
  .concat(data_21_05_03_5m)
  .concat(data_21_05_04_5m)
  .concat(data_21_05_05_5m)
  .concat(data_21_05_06_5m)
  .concat(data_21_05_07_5m)
  .concat(data_21_05_08_5m)
  .concat(data_21_05_09_5m)
  .concat(data_21_05_10_5m)
  .concat(data_21_05_11_5m)
  .concat(data_21_05_12_5m)
  .concat(data_21_05_13_5m)
  .concat(data_21_05_14_5m)
  .concat(data_21_05_15_5m)
  .concat(data_21_05_16_5m)
  .concat(data_21_05_17_5m)
  .concat(data_21_05_18_5m)
  .concat(data_21_05_19_5m)
  .concat(data_21_05_20_5m)
  .concat(data_21_05_21_5m)
  .concat(data_21_05_22_5m)
  .concat(data_21_05_23_5m)
  .concat(data_21_05_24_5m)
  .concat(data_21_05_25_5m)
  .concat(data_21_05_26_5m)
  .concat(data_21_05_27_5m)
  .concat(data_21_05_28_5m)
  .concat(data_21_05_29_5m)
  .concat(data_21_05_30_5m)
  .concat(data_21_05_31_5m)

const daysData_21_06_t=
  data_21_06_01_5m
  .concat(data_21_06_02_5m)
  .concat(data_21_06_03_5m)
  .concat(data_21_06_04_5m)
  .concat(data_21_06_05_5m)
  .concat(data_21_06_06_5m)
  .concat(data_21_06_07_5m)
  .concat(data_21_06_08_5m)
  .concat(data_21_06_09_5m)
  .concat(data_21_06_10_5m)
  .concat(data_21_06_11_5m)
  .concat(data_21_06_12_5m)
  .concat(data_21_06_13_5m)
  .concat(data_21_06_14_5m)
  .concat(data_21_06_15_5m)
  .concat(data_21_06_16_5m)
  .concat(data_21_06_17_5m)
  .concat(data_21_06_18_5m)
  .concat(data_21_06_19_5m)
  .concat(data_21_06_20_5m)
  .concat(data_21_06_21_5m)
  .concat(data_21_06_22_5m)
  .concat(data_21_06_23_5m)
  .concat(data_21_06_24_5m)
  .concat(data_21_06_25_5m)
  .concat(data_21_06_26_5m)
  .concat(data_21_06_27_5m)
  .concat(data_21_06_28_5m)
  .concat(data_21_06_29_5m)
  .concat(data_21_06_30_5m)

const daysData_21_07_t=
  data_21_07_01_5m
  .concat(data_21_07_02_5m)
  .concat(data_21_07_03_5m)
  .concat(data_21_07_04_5m)
  .concat(data_21_07_05_5m)
  .concat(data_21_07_06_5m)
  .concat(data_21_07_07_5m)
  .concat(data_21_07_08_5m)
  .concat(data_21_07_09_5m)
  .concat(data_21_07_10_5m)
  .concat(data_21_07_11_5m)
  .concat(data_21_07_12_5m)
  .concat(data_21_07_13_5m)
  .concat(data_21_07_14_5m)
  .concat(data_21_07_15_5m)
  .concat(data_21_07_16_5m)
  .concat(data_21_07_17_5m)
  .concat(data_21_07_18_5m)
  .concat(data_21_07_19_5m)
  .concat(data_21_07_20_5m)
  .concat(data_21_07_21_5m)
  .concat(data_21_07_22_5m)
  .concat(data_21_07_23_5m)
  .concat(data_21_07_24_5m)
  .concat(data_21_07_25_5m)
  .concat(data_21_07_26_5m)
  .concat(data_21_07_27_5m)
  .concat(data_21_07_28_5m)
  .concat(data_21_07_29_5m)
  .concat(data_21_07_30_5m)
  .concat(data_21_07_31_5m)

const daysData_21_08_t=
  data_21_08_01_5m
  .concat(data_21_08_02_5m)
  .concat(data_21_08_03_5m)
  .concat(data_21_08_04_5m)
  .concat(data_21_08_05_5m)
  .concat(data_21_08_06_5m)
  .concat(data_21_08_07_5m)
  .concat(data_21_08_08_5m)
  .concat(data_21_08_09_5m)
  .concat(data_21_08_10_5m)
  .concat(data_21_08_11_5m)
  .concat(data_21_08_12_5m)
  .concat(data_21_08_13_5m)
  .concat(data_21_08_14_5m)
  .concat(data_21_08_15_5m)
  .concat(data_21_08_16_5m)
  .concat(data_21_08_17_5m)
  .concat(data_21_08_18_5m)
  .concat(data_21_08_19_5m)
  .concat(data_21_08_20_5m)
  .concat(data_21_08_21_5m)
  .concat(data_21_08_22_5m)
  .concat(data_21_08_23_5m)
  .concat(data_21_08_24_5m)
  .concat(data_21_08_25_5m)
  .concat(data_21_08_26_5m)
  .concat(data_21_08_27_5m)
  .concat(data_21_08_28_5m)
  .concat(data_21_08_29_5m)
  .concat(data_21_08_30_5m)
  .concat(data_21_08_31_5m)

const daysData_21_09_t=
  data_21_09_01_5m
  .concat(data_21_09_02_5m)
  .concat(data_21_09_03_5m)
  .concat(data_21_09_04_5m)
  .concat(data_21_09_05_5m)
  .concat(data_21_09_06_5m)
  .concat(data_21_09_07_5m)
  .concat(data_21_09_08_5m)
  .concat(data_21_09_09_5m)
  .concat(data_21_09_10_5m)
  .concat(data_21_09_11_5m)
  .concat(data_21_09_12_5m)
  .concat(data_21_09_13_5m)
  .concat(data_21_09_14_5m)
  .concat(data_21_09_15_5m)
  .concat(data_21_09_16_5m)
  .concat(data_21_09_17_5m)
  .concat(data_21_09_18_5m)
  .concat(data_21_09_19_5m)
  .concat(data_21_09_20_5m)
  .concat(data_21_09_21_5m)
  .concat(data_21_09_22_5m)
  .concat(data_21_09_23_5m)
  .concat(data_21_09_24_5m)
  .concat(data_21_09_25_5m)
  .concat(data_21_09_26_5m)
  .concat(data_21_09_27_5m)
  .concat(data_21_09_28_5m)
  .concat(data_21_09_29_5m)
  .concat(data_21_09_30_5m)

const daysData_21_10_t=
  data_21_10_01_5m
  .concat(data_21_10_02_5m)
  .concat(data_21_10_03_5m)
  .concat(data_21_10_04_5m)
  .concat(data_21_10_05_5m)
  .concat(data_21_10_06_5m)
  .concat(data_21_10_07_5m)
  .concat(data_21_10_08_5m)
  .concat(data_21_10_09_5m)
  .concat(data_21_10_10_5m)
  .concat(data_21_10_11_5m)
  .concat(data_21_10_12_5m)
  .concat(data_21_10_13_5m)
  .concat(data_21_10_14_5m)
  .concat(data_21_10_15_5m)
  .concat(data_21_10_16_5m)
  .concat(data_21_10_17_5m)
  .concat(data_21_10_18_5m)
  .concat(data_21_10_19_5m)
  .concat(data_21_10_20_5m)
  .concat(data_21_10_21_5m)
  .concat(data_21_10_22_5m)
  .concat(data_21_10_23_5m)
  .concat(data_21_10_24_5m)
  .concat(data_21_10_25_5m)
  .concat(data_21_10_26_5m)
  .concat(data_21_10_27_5m)
  .concat(data_21_10_28_5m)
  .concat(data_21_10_29_5m)
  .concat(data_21_10_30_5m)
  .concat(data_21_10_31_5m)

const daysData_21_11_t=
  data_21_11_01_5m
  .concat(data_21_11_02_5m)
  .concat(data_21_11_03_5m)
  .concat(data_21_11_04_5m)
  .concat(data_21_11_05_5m)
  .concat(data_21_11_06_5m)
  .concat(data_21_11_07_5m)
  .concat(data_21_11_08_5m)
  .concat(data_21_11_09_5m)
  .concat(data_21_11_10_5m)
  .concat(data_21_11_11_5m)
  .concat(data_21_11_12_5m)
  .concat(data_21_11_13_5m)
  .concat(data_21_11_14_5m)
  .concat(data_21_11_15_5m)
  .concat(data_21_11_16_5m)
  .concat(data_21_11_17_5m)
  .concat(data_21_11_18_5m)
  .concat(data_21_11_19_5m)
  .concat(data_21_11_20_5m)
  .concat(data_21_11_21_5m)
  .concat(data_21_11_22_5m)
  .concat(data_21_11_23_5m)
  .concat(data_21_11_24_5m)
  .concat(data_21_11_25_5m)
  .concat(data_21_11_26_5m)
  .concat(data_21_11_27_5m)
  .concat(data_21_11_28_5m)
  .concat(data_21_11_29_5m)
  .concat(data_21_11_30_5m)

const daysData_21_12_t=
  data_21_12_01_5m
  .concat(data_21_12_02_5m)
  .concat(data_21_12_03_5m)
  .concat(data_21_12_04_5m)
  .concat(data_21_12_05_5m)
  .concat(data_21_12_06_5m)
  .concat(data_21_12_07_5m)
  .concat(data_21_12_08_5m)
  .concat(data_21_12_09_5m)
  .concat(data_21_12_10_5m)
  .concat(data_21_12_11_5m)
  .concat(data_21_12_12_5m)
  .concat(data_21_12_13_5m)
  .concat(data_21_12_14_5m)
  .concat(data_21_12_15_5m)
  .concat(data_21_12_16_5m)
  .concat(data_21_12_17_5m)
  .concat(data_21_12_18_5m)
  .concat(data_21_12_19_5m)
  .concat(data_21_12_20_5m)
  .concat(data_21_12_21_5m)
  .concat(data_21_12_22_5m)
  .concat(data_21_12_23_5m)
  .concat(data_21_12_24_5m)
  .concat(data_21_12_25_5m)
  .concat(data_21_12_26_5m)
  .concat(data_21_12_27_5m)
  .concat(data_21_12_28_5m)
  .concat(data_21_12_29_5m)
  .concat(data_21_12_30_5m)
  .concat(data_21_12_31_5m)
const daysData_22_01_t=
  data_22_01_01_5m
  .concat(data_22_01_02_5m)
  .concat(data_22_01_03_5m)
  .concat(data_22_01_04_5m)
  .concat(data_22_01_05_5m)
  .concat(data_22_01_06_5m)
  .concat(data_22_01_07_5m)
  .concat(data_22_01_08_5m)
  .concat(data_22_01_09_5m)
  .concat(data_22_01_10_5m)
  .concat(data_22_01_11_5m)
  .concat(data_22_01_12_5m)
  .concat(data_22_01_13_5m)
  .concat(data_22_01_14_5m)
  .concat(data_22_01_15_5m)
  .concat(data_22_01_16_5m)
  .concat(data_22_01_17_5m)
  .concat(data_22_01_18_5m)
  .concat(data_22_01_19_5m)
  .concat(data_22_01_20_5m)
  .concat(data_22_01_21_5m)
  .concat(data_22_01_22_5m)
  .concat(data_22_01_23_5m)
  .concat(data_22_01_24_5m)
  .concat(data_22_01_25_5m)
  .concat(data_22_01_26_5m)
  .concat(data_22_01_27_5m)
  .concat(data_22_01_28_5m)
  .concat(data_22_01_29_5m)
  .concat(data_22_01_30_5m)
  .concat(data_22_01_31_5m)

const daysData_22_02_t=
  data_22_02_01_5m
  .concat(data_22_02_02_5m)
  .concat(data_22_02_03_5m)
  .concat(data_22_02_04_5m)
  .concat(data_22_02_05_5m)
  .concat(data_22_02_06_5m)
  .concat(data_22_02_07_5m)
  .concat(data_22_02_08_5m)
  .concat(data_22_02_09_5m)
  .concat(data_22_02_10_5m)
  .concat(data_22_02_11_5m)
  .concat(data_22_02_12_5m)
  .concat(data_22_02_13_5m)
  .concat(data_22_02_14_5m)
  .concat(data_22_02_15_5m)
  .concat(data_22_02_16_5m)
  .concat(data_22_02_17_5m)
  .concat(data_22_02_18_5m)
  .concat(data_22_02_19_5m)
  .concat(data_22_02_20_5m)
  .concat(data_22_02_21_5m)
  .concat(data_22_02_22_5m)
  .concat(data_22_02_23_5m)
  .concat(data_22_02_24_5m)
  .concat(data_22_02_25_5m)
  .concat(data_22_02_26_5m)
  .concat(data_22_02_27_5m)
  .concat(data_22_02_28_5m)

const daysData_22_03_t=
  data_22_03_01_5m
  .concat(data_22_03_02_5m)
  .concat(data_22_03_03_5m)
  .concat(data_22_03_04_5m)
  .concat(data_22_03_05_5m)
  .concat(data_22_03_06_5m)
  .concat(data_22_03_07_5m)
  .concat(data_22_03_08_5m)
  .concat(data_22_03_09_5m)
  .concat(data_22_03_10_5m)
  .concat(data_22_03_11_5m)
  .concat(data_22_03_12_5m)
  .concat(data_22_03_13_5m)
  .concat(data_22_03_14_5m)
  .concat(data_22_03_15_5m)
  .concat(data_22_03_16_5m)
  .concat(data_22_03_17_5m)
  .concat(data_22_03_18_5m)
  .concat(data_22_03_19_5m)
  .concat(data_22_03_20_5m)
  .concat(data_22_03_21_5m)
  .concat(data_22_03_22_5m)
  .concat(data_22_03_23_5m)
  .concat(data_22_03_24_5m)
  .concat(data_22_03_25_5m)
  .concat(data_22_03_26_5m)
  .concat(data_22_03_27_5m)
  .concat(data_22_03_28_5m)
  .concat(data_22_03_29_5m)
  .concat(data_22_03_30_5m)
  .concat(data_22_03_31_5m)

const daysData_22_04_t=
  data_22_04_01_5m
  .concat(data_22_04_02_5m)
  .concat(data_22_04_03_5m)
  .concat(data_22_04_04_5m)
  .concat(data_22_04_05_5m)
  .concat(data_22_04_06_5m)
  .concat(data_22_04_07_5m)
  .concat(data_22_04_08_5m)
  .concat(data_22_04_09_5m)
  .concat(data_22_04_10_5m)
  .concat(data_22_04_11_5m)
  .concat(data_22_04_12_5m)
  .concat(data_22_04_13_5m)
  .concat(data_22_04_14_5m)
  .concat(data_22_04_15_5m)
  .concat(data_22_04_16_5m)
  .concat(data_22_04_17_5m)
  .concat(data_22_04_18_5m)
  .concat(data_22_04_19_5m)
  .concat(data_22_04_20_5m)
  .concat(data_22_04_21_5m)
  .concat(data_22_04_22_5m)
  .concat(data_22_04_23_5m)
  .concat(data_22_04_24_5m)
  .concat(data_22_04_25_5m)
  .concat(data_22_04_26_5m)
  .concat(data_22_04_27_5m)
  .concat(data_22_04_28_5m)
  .concat(data_22_04_29_5m)
  .concat(data_22_04_30_5m)

const daysData_22_05_t=
  data_22_05_01_5m
  .concat(data_22_05_02_5m)
  .concat(data_22_05_03_5m)
  .concat(data_22_05_04_5m)
  .concat(data_22_05_05_5m)
  .concat(data_22_05_06_5m)
  .concat(data_22_05_07_5m)
  .concat(data_22_05_08_5m)
  .concat(data_22_05_09_5m)
  .concat(data_22_05_10_5m)
  .concat(data_22_05_11_5m)
  .concat(data_22_05_12_5m)
  .concat(data_22_05_13_5m)
  .concat(data_22_05_14_5m)
  .concat(data_22_05_15_5m)
  .concat(data_22_05_16_5m)
  .concat(data_22_05_17_5m)
  .concat(data_22_05_18_5m)
  .concat(data_22_05_19_5m)
  .concat(data_22_05_20_5m)
  .concat(data_22_05_21_5m)
  .concat(data_22_05_22_5m)
  .concat(data_22_05_23_5m)
  .concat(data_22_05_24_5m)
  .concat(data_22_05_25_5m)
  .concat(data_22_05_26_5m)
  .concat(data_22_05_27_5m)
  .concat(data_22_05_28_5m)
  .concat(data_22_05_29_5m)
  .concat(data_22_05_30_5m)
  .concat(data_22_05_31_5m)

const daysData_22_06_t=
  data_22_06_01_5m
  .concat(data_22_06_02_5m)
  .concat(data_22_06_03_5m)
  .concat(data_22_06_04_5m)
  .concat(data_22_06_05_5m)
  .concat(data_22_06_06_5m)
  .concat(data_22_06_07_5m)
  .concat(data_22_06_08_5m)
  .concat(data_22_06_09_5m)
  .concat(data_22_06_10_5m)
  .concat(data_22_06_11_5m)
  .concat(data_22_06_12_5m)
  .concat(data_22_06_13_5m)
  .concat(data_22_06_14_5m)
  .concat(data_22_06_15_5m)
  .concat(data_22_06_16_5m)
  .concat(data_22_06_17_5m)
  .concat(data_22_06_18_5m)
  .concat(data_22_06_19_5m)
  .concat(data_22_06_20_5m)
  .concat(data_22_06_21_5m)
  .concat(data_22_06_22_5m)
  .concat(data_22_06_23_5m)
  .concat(data_22_06_24_5m)
  .concat(data_22_06_25_5m)
  .concat(data_22_06_26_5m)
  .concat(data_22_06_27_5m)
  .concat(data_22_06_28_5m)
  .concat(data_22_06_29_5m)
  .concat(data_22_06_30_5m)

const daysData_22_07_t=
  data_22_07_01_5m
  .concat(data_22_07_02_5m)
  .concat(data_22_07_03_5m)
  .concat(data_22_07_04_5m)
  .concat(data_22_07_05_5m)
  .concat(data_22_07_06_5m)
  .concat(data_22_07_07_5m)
  .concat(data_22_07_08_5m)
  .concat(data_22_07_09_5m)
  .concat(data_22_07_10_5m)
  .concat(data_22_07_11_5m)
  .concat(data_22_07_12_5m)
  .concat(data_22_07_13_5m)
  .concat(data_22_07_14_5m)
  .concat(data_22_07_15_5m)
  .concat(data_22_07_16_5m)
  .concat(data_22_07_17_5m)
  .concat(data_22_07_18_5m)
  .concat(data_22_07_19_5m)
  .concat(data_22_07_20_5m)
  .concat(data_22_07_21_5m)
  .concat(data_22_07_22_5m)
  .concat(data_22_07_23_5m)
  .concat(data_22_07_24_5m)
  .concat(data_22_07_25_5m)
  .concat(data_22_07_26_5m)
  .concat(data_22_07_27_5m)
  .concat(data_22_07_28_5m)
  .concat(data_22_07_29_5m)
  .concat(data_22_07_30_5m)
  .concat(data_22_07_31_5m)

const daysData_22_08_t=
  data_22_08_01_5m
  .concat(data_22_08_02_5m)
  .concat(data_22_08_03_5m)
  .concat(data_22_08_04_5m)
  .concat(data_22_08_05_5m)
  .concat(data_22_08_06_5m)
  .concat(data_22_08_07_5m)
  .concat(data_22_08_08_5m)
  .concat(data_22_08_09_5m)
  .concat(data_22_08_10_5m)
  .concat(data_22_08_11_5m)
  .concat(data_22_08_12_5m)
  .concat(data_22_08_13_5m)
  .concat(data_22_08_14_5m)
  .concat(data_22_08_15_5m)
  .concat(data_22_08_16_5m)
  .concat(data_22_08_17_5m)
  .concat(data_22_08_18_5m)
  .concat(data_22_08_19_5m)
  .concat(data_22_08_20_5m)
  .concat(data_22_08_21_5m)
  .concat(data_22_08_22_5m)
  .concat(data_22_08_23_5m)
  .concat(data_22_08_24_5m)
  .concat(data_22_08_25_5m)
  .concat(data_22_08_26_5m)
  .concat(data_22_08_27_5m)
  .concat(data_22_08_28_5m)
  .concat(data_22_08_29_5m)
  .concat(data_22_08_30_5m)
  .concat(data_22_08_31_5m)

const daysData_22_09_t=
  data_22_09_01_5m
  .concat(data_22_09_02_5m)
  .concat(data_22_09_03_5m)
  .concat(data_22_09_04_5m)
  .concat(data_22_09_05_5m)
  .concat(data_22_09_06_5m)
  .concat(data_22_09_07_5m)
  .concat(data_22_09_08_5m)
  .concat(data_22_09_09_5m)
  .concat(data_22_09_10_5m)
  .concat(data_22_09_11_5m)
  .concat(data_22_09_12_5m)
  .concat(data_22_09_13_5m)
  .concat(data_22_09_14_5m)
  .concat(data_22_09_15_5m)
  .concat(data_22_09_16_5m)
  .concat(data_22_09_17_5m)
  .concat(data_22_09_18_5m)
  .concat(data_22_09_19_5m)
  .concat(data_22_09_20_5m)
  .concat(data_22_09_21_5m)
  .concat(data_22_09_22_5m)
  .concat(data_22_09_23_5m)
  .concat(data_22_09_24_5m)
  .concat(data_22_09_25_5m)
  .concat(data_22_09_26_5m)
  .concat(data_22_09_27_5m)
  .concat(data_22_09_28_5m)
  .concat(data_22_09_29_5m)
  .concat(data_22_09_30_5m)

const daysData_22_10_t=
  data_22_10_01_5m
  .concat(data_22_10_02_5m)
  .concat(data_22_10_03_5m)
  .concat(data_22_10_04_5m)
  .concat(data_22_10_05_5m)
  .concat(data_22_10_06_5m)
  .concat(data_22_10_07_5m)
  .concat(data_22_10_08_5m)
  .concat(data_22_10_09_5m)
  .concat(data_22_10_10_5m)
  .concat(data_22_10_11_5m)
  .concat(data_22_10_12_5m)
  .concat(data_22_10_13_5m)
  .concat(data_22_10_14_5m)
  .concat(data_22_10_15_5m)
  .concat(data_22_10_16_5m)
  .concat(data_22_10_17_5m)
  .concat(data_22_10_18_5m)
  .concat(data_22_10_19_5m)
  .concat(data_22_10_20_5m)
  .concat(data_22_10_21_5m)
  .concat(data_22_10_22_5m)
  .concat(data_22_10_23_5m)
  .concat(data_22_10_24_5m)
  .concat(data_22_10_25_5m)
  .concat(data_22_10_26_5m)
  .concat(data_22_10_27_5m)
  .concat(data_22_10_28_5m)
  .concat(data_22_10_29_5m)
  .concat(data_22_10_30_5m)
  .concat(data_22_10_31_5m)
  const daysData_22_11_t=
  data_22_11_01_5m
  .concat(data_22_11_02_5m)
  .concat(data_22_11_03_5m)
  .concat(data_22_11_04_5m)
  .concat(data_22_11_05_5m)
  .concat(data_22_11_06_5m)
  .concat(data_22_11_07_5m)
  .concat(data_22_11_08_5m)
  .concat(data_22_11_09_5m)
  .concat(data_22_11_10_5m)
  .concat(data_22_11_11_5m)
  .concat(data_22_11_12_5m)
  .concat(data_22_11_13_5m)
  .concat(data_22_11_14_5m)
  .concat(data_22_11_15_5m)
  .concat(data_22_11_16_5m)
  .concat(data_22_11_17_5m)
  .concat(data_22_11_18_5m)
  .concat(data_22_11_19_5m)
  .concat(data_22_11_20_5m)
  .concat(data_22_11_21_5m)
  .concat(data_22_11_22_5m)
  .concat(data_22_11_23_5m)
  .concat(data_22_11_24_5m)
  .concat(data_22_11_25_5m)
  .concat(data_22_11_26_5m)
  .concat(data_22_11_27_5m)
  .concat(data_22_11_28_5m)
  .concat(data_22_11_29_5m)
  .concat(data_22_11_30_5m)
  const daysData_22_12_t=
  data_22_12_01_5m
  .concat(data_22_12_02_5m)
  .concat(data_22_12_03_5m)
  .concat(data_22_12_04_5m)
  .concat(data_22_12_05_5m)
  .concat(data_22_12_06_5m)
  .concat(data_22_12_07_5m)
  .concat(data_22_12_08_5m)
  .concat(data_22_12_09_5m)
  .concat(data_22_12_10_5m)
  .concat(data_22_12_11_5m)
  .concat(data_22_12_12_5m)
  .concat(data_22_12_13_5m)
  .concat(data_22_12_14_5m)
  .concat(data_22_12_15_5m)
  .concat(data_22_12_16_5m)
  // .concat(data_22_12_17_5m)
  // .concat(data_22_12_18_5m)
  // .concat(data_22_12_19_5m)
  // .concat(data_22_12_20_5m)
  // .concat(data_22_12_21_5m)
  // .concat(data_22_12_22_5m)
  // .concat(data_22_12_23_5m)
  // .concat(data_22_12_24_5m)
  // .concat(data_22_12_25_5m)
  // .concat(data_22_12_26_5m)
  // .concat(data_22_12_27_5m)
  // .concat(data_22_12_28_5m)
  // .concat(data_22_12_29_5m)
  // .concat(data_22_12_30_5m)
  // .concat(data_22_12_31_5m)


  const daysData_21_01_12_10_t = daysData_21_01_t.concat(daysData_21_02_t).concat(daysData_21_03_t).concat(daysData_21_04_t).concat(daysData_21_05_t).concat(daysData_21_06_t).concat(daysData_21_07_t).concat(daysData_21_08_t).concat(daysData_21_09_t).concat(daysData_21_10_t).concat(daysData_21_11_t).concat(daysData_21_12_t).concat(daysData_22_01_t).concat(daysData_22_02_t).concat(daysData_22_03_t).concat(daysData_22_04_t).concat(daysData_22_05_t).concat(daysData_22_06_t).concat(daysData_22_07_t).concat(daysData_22_08_t).concat(daysData_22_09_t).concat(daysData_22_10_t)
  const daysData_21_01_12_11_t = daysData_21_01_t.concat(daysData_21_02_t).concat(daysData_21_03_t).concat(daysData_21_04_t).concat(daysData_21_05_t).concat(daysData_21_06_t).concat(daysData_21_07_t).concat(daysData_21_08_t).concat(daysData_21_09_t).concat(daysData_21_10_t).concat(daysData_21_11_t).concat(daysData_21_12_t).concat(daysData_22_01_t).concat(daysData_22_02_t).concat(daysData_22_03_t).concat(daysData_22_04_t).concat(daysData_22_05_t).concat(daysData_22_06_t).concat(daysData_22_07_t).concat(daysData_22_08_t).concat(daysData_22_09_t).concat(daysData_22_10_t).concat(daysData_22_11_t)
  const daysData_21_01_12_12_t = daysData_21_01_t.concat(daysData_21_02_t).concat(daysData_21_03_t).concat(daysData_21_04_t).concat(daysData_21_05_t).concat(daysData_21_06_t).concat(daysData_21_07_t).concat(daysData_21_08_t).concat(daysData_21_09_t).concat(daysData_21_10_t).concat(daysData_21_11_t).concat(daysData_21_12_t).concat(daysData_22_01_t).concat(daysData_22_02_t).concat(daysData_22_03_t).concat(daysData_22_04_t).concat(daysData_22_05_t).concat(daysData_22_06_t).concat(daysData_22_07_t).concat(daysData_22_08_t).concat(daysData_22_09_t).concat(daysData_22_10_t).concat(daysData_22_11_t).concat(daysData_22_12_t)


  const daysData_21_01_12_10_m = [daysData_21_01_12_10_t]
  const daysData_21_01_12_11_m = [daysData_21_01_12_11_t]
  const daysData_21_01_12_12_m = [daysData_21_01_12_12_t]

const dataTemp=dataTempOld.reverse()
const sampleData=[[
  20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,21100,21200,21300,21400,21500,21600,21700,21800,21900,22000,21900,21800,21700,21600,21500,21400,21300,21200,21100,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,
  // 20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,
  // 19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,
  // 20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,20100,20200,20300,20400,20500,20600,20700,20800,20900,21000,20900,20800,20700,20600,20500,20400,20300,20200,20100,20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,
]]
const sampleData1=[[
  20000,20800,
  // 30000, 37000,32000, 45000, 40000, 44000, 32000,42000, 38000, 40000, 30000, 35000,
// 30000, 41000, 34000,40000, 42000, 50000, 65000, 50000, 55000, 48000,55000,50000,
// 68000,58000,65000,53000,70000,65000,75000,42000,60000,52000,60000,65000,50000,
// 61000,59000,65000,59000,65000,49000,55000,45000,50000,25000,40000,32000,41000,
// 35000,40000,31000,40000,37000,42000,30000,35000,30000,36000,35000,36000,30000,
]]

const hourPeriod=[
  {value:1,label:'5m',},
  {value:2,label:'10m',},
  {value:3,label:'15m',},
  {value:4,label:'20m',},
  {value:5,label:'25m',},
  {value:6,label:'30m',},
  {value:7,label:'35m',},
  {value:8,label:'40m',},
  {value:9,label:'45m',},
  {value:10,label:'50m',},
  {value:11,label:'55m',},
  {value:12,label:'60m',},
  {value:13,label:'65m',},
  {value:14,label:'70m',},
  {value:15,label:'75m',},
  {value:16,label:'80m',},
  {value:17,label:'85m',},
  {value:18,label:'90m',},
  {value:19,label:'95m',},
  {value:20,label:'100m',},
  {value:21,label:'105m',},
  {value:22,label:'110m',},
  {value:23,label:'115m',},
  {value:24,label:'120m',},
]
const realHours=[
  {value:0,label:'0h',},
  {value:48,label:'4h',},
  {value:72,label:'6h',},
  {value:96,label:'8h',},
  {value:120,label:'10h',},
  {value:144,label:'12h',},
]
const testData=[
  20000,20100,20200,20300,20400,20500,20500,20400,20300,20200,20100,
  20000,20000,20100,20200,20300,20400,20500,20500,20400,20300,20200,20100,20000

  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,
  // 19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,
  // 19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,
  // 19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  // 20000,19900,19800,19700,19600,19500,19400,19300,19200,19100,19000,
  // 19000,19100,19200,19300,19400,19500,19600,19700,19800,19900,20000,
  
]
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const data = [
  { country: "cn", value: 1389618778 }, // china
  { country: "in", value: 1311559204 }, // india
  { country: "us", value: 331883986 }, // united states
  { country: "id", value: 264935824 }, // indonesia
  { country: "pk", value: 210797836 }, // pakistan
  { country: "br", value: 210301591 }, // brazil
  { country: "ng", value: 208679114 }, // nigeria
  { country: "bd", value: 161062905 }, // bangladesh
  { country: "ru", value: 141944641 }, // russia
  { country: "mx", value: 127318112 }, // mexico
];
const mapData = {
  CN: 12000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20,
};
const Algorithm = (props) => {
  const [accountAmount, setAccountAmount] = useState(10000)
  const [profitVolume, setProfitVolume] = useState(100)
  const [longPriceVolume, setLongPriceVolume] = useState(100)
  const [amountNumber, setAmountNumber] = useState(30)
  const [unitAmount, setUnitAmount] = useState(1000)
  const [daysSample, setDaysSample] = useState(sampleData)
  const [days, setDays] = useState(daysData_21_01_12_12_m) //daysData_22_07_m
  const [days1, setDays1] = useState(daysData_21_01_12_12_m) //daysData_22_07_m
  const [results, setResults] = useState()
  const [exportData, setExportData] = useState([]);
  const [period, setPeriod] = useState(hourPeriod[0]);
  const [realHour, setRealHour] = useState(realHours[0]);
  const [newDays, setNewDays] = useState(3);

  const [priceDataBtc, setPriceData] = useState(dataTemp)
  const [priceVolume, setPriceVolume] = useState(100)
  const [stopProfitVolume, setStopProfitVolume] = useState(500)
  const [priceVolume2, setPriceVolume2] = useState(300)
  const [lossLimit, setlossLimit] = useState(20000)
  const [profit, setProfit] = useState(100)
  const [invert, setInvert] = useState(500)
  const [loss, setloss] = useState(-500)
  const [selectionRange, setSelectionRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'range',
  }])
  const [series, setSeries] = useState([
    { name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148,
    ]},
    { name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148,
    ]},
    { name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148,
    ]}
])
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Profit by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      // categories: ['21-Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec','22-Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct'],
      // categories: ['21-Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec','22-Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct'],
    }
  })
  useEffect(() => {

  }, []);


  useEffect(() => {
    let exportDataObj={}
    let exportData=[]
    let month=0
    let preMonth=0
    let newDays=[]
    let newDaysTmp=[]
    let newDaysRealTmp=[]
    days[0].map((item, idx) => {
      let periodOfHour=period.value
      if((idx%periodOfHour)==0){
        newDaysTmp.push(item)
      }
    })

    newDaysTmp.map((item, idx) => {
      let realHourTmp=realHour.value
      if(idx%(288/period.value)>=realHourTmp/period.value){
        newDaysRealTmp.push(item)
      }
    })
    newDays.push(newDaysRealTmp)
    // console.log('newDays:',newDaysRealTmp)
    // console.log('days:',days[0])
    setNewDays(newDays)
    newDays[0].map((item, idx) => {
      if((idx%(288*31))==0){
        if(preMonth===12){
          preMonth=0
        }
        month=preMonth+1
        preMonth=month
      }
      else{
        month=''
      }
      exportDataObj = {
        'id':month,
        'value': item
      }
      exportData.push(exportDataObj)
      exportDataObj = {}
    })
    setExportData(exportData)
    // console.log('exportData:',exportData)
  }, [days, period,realHour]);
  useEffect(() => {
    console.log('days:',days)
    let amount=Number((unitAmount*amountNumber)).toFixed(0)
    setAccountAmount(Number(amount))
    setResults([])
  }, [amountNumber,lossLimit,unitAmount]);
  const initColumns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id',
        defaultSortDesc: true,
        Cell: ({ original }) => {
          return (
            <div className='wallet-address-column'style={{ color: '#1E90FF', cursor: 'pointer' }}>
              {original?.id}
            </div>
          );
        },
      },
      {
        Header: 'value',
        accessor: 'value',
        defaultSortDesc: true,
        Cell: ({ original }) => {
          return (
            <div className='wallet-address-column'style={{ color: '#1E90FF', cursor: 'pointer' }}>
              {original?.value}</div>
          );
        },
      }
    ],
    []
  );

  const [columns, setColumns] = useState(initColumns)
  const handlePeriod=(e)=>{
    setPeriod(e)
    setDays(days)
  } 
  const handleRealHour=(e)=>{
    setRealHour(e)
    setDays(days)
  } 
  const algorithmLoop=(mode)=>{
    let result ={}
    // let resultsTmp=JSON.parse(JSON.stringify(results))
    let resultsTmp=[]
    let longProfitTotal=0
    let longLossTotal=0
    let shortProfitTotal=0
    let shortLossTotal=0
    let realLongLossTotal=0
    let realShortLossTotal=0
    let realLongLossTotalIm=0
    let realShortLossTotalIm=0
    let realLongProTotalIm=0
    let realShortProTotalIm=0
    let longAmount=0
    let shortAmount=0
    for (let i = 0; i <= days.length; i++) {
      longAmount=0
      shortAmount=0
      if(i<= days.length-1){
        let calcLongEnable=true
        let calcshortEnable=true
        resultsTmp.map((item ,idx)=>{
          if(item.longLossActive&& item.longLoss<0){
            longAmount=longAmount+Number(item.longAmount)
          }
          if(item.shortLossActive&&item.shortLoss<0){
            shortAmount=shortAmount+Number(item.shortAmount)
          }
        })
        if(longAmount>unitAmount*40){
          calcLongEnable=false
        }
        if(shortAmount>unitAmount*40){
          calcshortEnable=false
        }
        result=Algorithm6(newDays[i],i+1,true,true)

        resultsTmp.push(result)
        result&&resultsTmp.map((item ,idx)=>{
          if(item.longLossActive&&item.longLoss<=0&&item.longCurPosition<result.longRealPosition){
            item.longLossActive=false
            // realLongProTotalIm=realLongProTotalIm+Number((result.longRealPosition - item.longCurPosition)*(item.longAmount/result.longRealPosition))
            realLongProTotalIm=realLongProTotalIm+Number((result.longRealPosition - item.longCurPosition)*(item.longAmount/item.longCurPosition))
          }
          if(item.shortLossActive&&item.shortLoss<=0&&item.shortCurPosition>result.shortRealPosition){
            item.shortLossActive=false
            // realShortProTotalIm=realShortProTotalIm+Number(( item.shortCurPosition-result.shortRealPosition)*(item.shortAmount/result.shortRealPosition))
            realShortProTotalIm=realShortProTotalIm+Number(( item.shortCurPosition-result.shortRealPosition)*(item.shortAmount/item.shortCurPosition))
          }
        })
      }
      else{
        resultsTmp.map((item,idx)=>{
          longProfitTotal=longProfitTotal+Number(item.longProfit)
          if(item.longLossActive){
            longAmount=longAmount+Number(item.longAmount)
            realLongLossTotal=realLongLossTotal+Number(item.longLoss)
            realLongLossTotalIm=realLongLossTotalIm+Number((result.longRealPosition - item.longCurPosition)*(item.longAmount/item.longCurPosition))
          }
          longLossTotal=longLossTotal+Number(item.longLoss)
          shortProfitTotal=shortProfitTotal+Number(item.shortProfit)
          if(item.shortLossActive){
            shortAmount=shortAmount+Number(item.shortAmount)
            realShortLossTotal=realShortLossTotal+Number(item.shortLoss)
            realShortLossTotalIm=realShortLossTotalIm+Number(( item.shortCurPosition-result.shortRealPosition)*(item.shortAmount/item.shortCurPosition))
          }
          shortLossTotal=shortLossTotal+Number(item.shortLoss)
        })
        let obj={
          'id':i+1,
          'longProfit':longProfitTotal,
          // 'longLoss':String(longLossTotal)+': '+String(realLongLossTotal)+': '+String(realLongLossTotalIm.toFixed(0))+': '+String(realLongProTotalIm.toFixed(0)),
          'longLoss':String(realLongLossTotalIm.toFixed(0))+': '+String(realLongProTotalIm.toFixed(0)),
          'realLongLoss':realLongLossTotal,
          'longCurPosition':0,
          'longAmount':String(longAmount)+':'+String(result.realPriceMin),
          'shortProfit':shortProfitTotal,
          // 'shortLoss':String(shortLossTotal)+': '+String(realShortLossTotal)+': '+String(realShortLossTotalIm.toFixed(0))+ ": "+String(realShortProTotalIm.toFixed(0)),
          'shortLoss':String(realShortLossTotalIm.toFixed(0))+ ": "+String(realShortProTotalIm.toFixed(0)),
          'realShortLoss':realShortLossTotal,
          'shortAmount':String(shortAmount)+':'+String(result.realPriceMax),
          'dayTotal':(longProfitTotal+longLossTotal+shortProfitTotal+shortLossTotal).toFixed(0),
        }
        resultsTmp.push(obj)
        console.log('resultsTmp:',resultsTmp)
      }
    }
    setResults(resultsTmp)
  }
  const Algorithm6=(dayData,id,long,short)=>{
    console.log('dayData:',dayData)
    // console.log('days:',days)
    let longVolume=0
    let longCurPosition=0
    let priceData=dayData
    // priceData=testData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let longDeleteIdxs=[] 
    let longCurLossTmp=0
    let longProfitTmpArray=[]
    let longCurLossTmpArray=[]
    let realPriceMax=0
    let realPriceMin=80000
    let longCurPositionTemp=0
    let accountAmountTmp=accountAmount
    let longDifference=0
    let shortDifference=0
    let longRealPrice=priceData[priceData.length-1]
    let shortVolume=0
    let shortCurPosition=0
    let shortStartPosition=0
    let shortPositionsTmp=[]
    let shortAmountTmp=0
    let shortProfitTmp=0
    let shortProfitTmpArray=[]
    let shortDeleteIdxs=[]
    let shortCurLossTmp=0
    let dayTotal=0
    let dayLongTotal=0
    let dayShortTotal=0
    let dayLongTotalArray=[]
    let dayShortTotalArray=[]
    let shortCurLossTmpArray=[]
    let dayTotalArray=[]
    let liPre=0
    let siPre=0
    for (let i = 0; i <= priceData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
      if(longAmountTmp==0){
        longStartPosition=priceData[startTimeIdx]
        longCurPosition=priceData[startTimeIdx]
        longAmountTmp=unitAmount
        longPositionsTmp.push(longStartPosition)
      }
      longVolume=priceData[timeIdx]-longStartPosition
      if(unitAmount*longPositionsTmp.length<accountAmount){
        if(longVolume<=-longPriceVolume*(longPositionsTmp.length)){
          longCurPosition=longCurPosition-((longCurPosition-priceData[timeIdx])*(unitAmount/(longAmountTmp+unitAmount)))
          longPositionsTmp.push(priceData[timeIdx])
          // console.log('longPositionsTmp:',i,longPositionsTmp)
          longAmountTmp=longAmountTmp+unitAmount
        }
      }
      else{
        if(longCurPositionTemp!==longCurPosition){
        }
        longCurPositionTemp=longCurPosition
      }
      if (realPriceMax<priceData[timeIdx]){
        realPriceMax=priceData[timeIdx]
      }
      if (realPriceMin>priceData[timeIdx]){
        realPriceMin=priceData[timeIdx]
      }
      // console.log('longNum, realValue,curPosition,longVolume,amount...',i,(i/288).toFixed(0),priceData[timeIdx],longCurPosition.toFixed(0),longVolume,longAmountTmp)
      longDifference = 0
      for (let j =1; j <= longPositionsTmp.length; j++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-j)
          let longProfitTmpPre=longProfitTmp
          longProfitTmp=longProfitTmp+(priceData[timeIdx]-longCurPosition)*(unitAmount/priceData[timeIdx])
          if(liPre!==i){
            // console.log('longProfitTmp:',i,longProfitTmp.toFixed(0),(longProfitTmp-longProfitTmpPre).toFixed(0))
          }
          console.log('longProfitTmp:',i,longProfitTmp.toFixed(0),(longProfitTmp-longProfitTmpPre).toFixed(0),longCurPosition.toFixed(0),priceData[timeIdx],longAmountTmp)

          liPre=i
          // accountAmountTmp=(accountAmount+Number(longProfitTmp)).toFixed(0)
          longAmountTmp=longAmountTmp-unitAmount
        }
      }
      longDeleteIdxs.map((item,idx)=>{
        longPositionsTmp.splice(item, 1)
      })
      longDeleteIdxs=[]
      longCurLossTmp=((longCurPosition-priceData[timeIdx])*((longAmountTmp)/priceData[timeIdx]))

      if(longCurLossTmp>lossLimit){
        longProfitTmp=longProfitTmp-longCurLossTmp
        // console.log('longProfitTm_p_____:',i,longProfitTmp.toFixed(0),longCurLossTmp.toFixed(0),longCurPosition.toFixed(0),priceData[timeIdx],longAmountTmp)
        longAmountTmp=0
        longCurLossTmp=0
        longPositionsTmp=[]
      }
      if(shortAmountTmp==0){
        shortStartPosition=priceData[startTimeIdx]
        shortCurPosition=priceData[startTimeIdx]
        shortAmountTmp=unitAmount
        shortPositionsTmp.push(shortStartPosition)
      }
      shortVolume=priceData[timeIdx]-shortStartPosition
      if(unitAmount*shortPositionsTmp.length<accountAmount){
        if(shortVolume>=priceVolume*(shortPositionsTmp.length)){
          shortCurPosition=shortCurPosition+((priceData[timeIdx]-shortCurPosition)*(unitAmount/(shortAmountTmp+unitAmount)))
          shortPositionsTmp.push(priceData[timeIdx])
          // console.log('shortPositionsTmp:',i,shortPositionsTmp.length)
          shortAmountTmp=shortAmountTmp+unitAmount
        }
      }
      else{
      }
      // console.log('shortNum, realValue, shortCurPosition,amount...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition.toFixed(0),shortAmountTmp)
      shortDifference = 0
      for (let j =1; j <= shortPositionsTmp.length; j++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-j]-priceData[timeIdx]
        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-j)
          let shortProfitTmpPre=shortProfitTmp
          shortProfitTmp=shortProfitTmp+(shortCurPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(siPre!=i){
            // console.log('shortProfitTmp:',i,shortProfitTmp.toFixed(0),(shortProfitTmp-shortProfitTmpPre).toFixed(0),shortCurPosition,priceData[timeIdx],shortAmountTmp)
          }
          // console.log('shortProfitTmp:',i,shortProfitTmp.toFixed(0),(shortProfitTmp-shortProfitTmpPre).toFixed(0),shortCurPosition.toFixed(0),priceData[timeIdx],shortAmountTmp)
          siPre=i
          shortAmountTmp=shortAmountTmp-unitAmount
          // accountAmountTmp=(accountAmount+Number(shortProfitTmp)).toFixed(0)
          // setAccountAmount(accountAmountTmp)
        }
      }
      shortDeleteIdxs.map((item,idx)=>{
        shortPositionsTmp.splice(item, 1)
      })
      shortDeleteIdxs=[]
      shortCurLossTmp=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/priceData[timeIdx])
      if(shortCurLossTmp>lossLimit){
        shortProfitTmp=shortProfitTmp-shortCurLossTmp
        // console.log('shortProfitTm_p_______:',i,shortProfitTmp.toFixed(0),shortCurLossTmp.toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp)
        shortAmountTmp=0
        shortCurLossTmp=0
        shortPositionsTmp=[]
      }
      accountAmountTmp=(accountAmount*2/3+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount))*1.5
      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      dayLongTotal=(longProfitTmp-longCurLossTmp)
      dayShortTotal=(shortProfitTmp-shortCurLossTmp)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      // let periodN=1
      if(((i+2)%periodN)==0){
        shortCurLossTmpArray.push(-shortCurLossTmp.toFixed(0))
        shortProfitTmpArray.push(shortProfitTmp.toFixed(0))
        longCurLossTmpArray.push(-longCurLossTmp.toFixed(0))
        longProfitTmpArray.push(longProfitTmp.toFixed(0))
        dayTotalArray.push(dayTotal.toFixed(0))
        dayLongTotalArray.push(dayLongTotal.toFixed(0))
        dayShortTotalArray.push(dayShortTotal.toFixed(0))
      }
    }
    let result={}
    // console.log('shortCurLossTmpArray:',shortCurLossTmpArray)
    // console.log('shortProfitTmpArray:',shortProfitTmpArray)
    // console.log('longCurLossTmpArray:',longCurLossTmpArray)
    // console.log('longProfitTmpArray:',longProfitTmpArray)
    console.log('dayTotalArray:',dayTotalArray)
    // console.log('accountAmountTmp:',accountAmountTmp)
    let exportDataObj={}
    let exportData=[]
    dayTotalArray.map((item, idx) => {
      exportDataObj = {
        'id':idx,
        'value': item
      }
      exportData.push(exportDataObj)
      exportDataObj = {}
    })
    // console.log('exportData:',exportData)
    setExportData(exportData)
    let seriesTmp=[
      { name: "Total", data: dayTotalArray},
      { name: "Long", data: dayLongTotalArray},
      { name: "Short", data: dayShortTotalArray},
    ]
  // console.log('seriesTmp:',seriesTmp)
    setSeries(seriesTmp)
    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      // 'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longCurPosition':longCurPosition.toFixed(0),
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      // 'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
      'shortCurPosition':shortCurPosition.toFixed(0),
      'shortLossActive':shortCurLossTmp>0?true:false,
      'shortRealPosition':priceData[priceData.length-1],
      'shortAmount':shortAmountTmp?.toFixed(0),
      'dayTotal':(longProfitTmp-longCurLossTmp+shortProfitTmp-shortCurLossTmp).toFixed(0),
      'realPriceMin':realPriceMin,
      'realPriceMax':realPriceMax,
    }
    if(!long){
      result.longProfit=0
      result.longLoss=0
      result.longCurPosition=0
      result.longLossActive=false
      result.longAmount=0
    }
    if(!short){
      result.shortProfit=0
      result.shortLoss=0
      result.shortCurPosition=0
      result.shortLossActive=false
      result.shortAmount=0
    }
    return result
  }

  const calcAlgorithm=()=>{
    console.log('dayData:',newDays)
    let i=0
    let priceDatas=testData
    let profitVolume=profit
    let reverseVolume=invert
    let restartVolume=-loss
    priceDatas=newDays[0]
    let longStartPosition=0
    let longCurPosition=0
    let longDifference = 0
    let longDifferenceFromStart = 0
    let longProfit = 0
    let longEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let isStartedShort = false
    console.log('priceDatas:',priceDatas)
    for (let priceData of priceDatas) {
      // console.log('priceData:',i,priceData)
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          isStartedLong = true
          console.log('=========longStart',i,longStartPosition)
        }else{
          longDifference = priceData - longCurPosition
          longDifferenceFromStart = priceData - longStartPosition
          console.log('--Diff,real,CurPos=:',i,longDifference,priceData,longCurPosition)
          //If the difference is greater than the profit volume (e.g. 100) get profit
          if(longDifference>=profitVolume){
            longProfit=longProfit+(longDifference)*(unitAmount/priceData)
            console.log('longProfit:',i,longDifference,priceData,"+",longCurPosition,"=",longProfit)
            longCurPosition = priceData
            //If the difference between the start long position and the real price is greater than the reverse volume (e.g. 500), reverse to short.
            if(longDifferenceFromStart>=reverseVolume){
              console.log('=========',i,longDifferenceFromStart,longStartPosition,'->',priceData,longCurPosition)
              longEnable=false
              isStartedLong = false
            }
          //If the difference is less than the restart volume (e.g. -500) get loss restart long
          }else if(longDifference<=-restartVolume){
            longProfit=longProfit+(longDifference)*(unitAmount/priceData)
            console.log('longProfit:',i,longDifference,priceData,"-",longCurPosition,"=",longProfit)
            isStartedLong = false
          }
          
        }
      }else{
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          isStartedShort = true
          console.log('=========shortStart',i,shortStartPosition)
        }else{
          shortDifference = shortCurPosition - priceData
          shortDifferenceFromStart = shortStartPosition - priceData
          console.log('==Diff,real,CurPos :',i,shortDifference,priceData,shortCurPosition)
          //If the difference is greater than the profit volum (e.g. 100)
          if(shortDifference>=profitVolume){
            shortProfit=shortProfit+(shortDifference)*(unitAmount/priceData)
            console.log('shortProfit:',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit)
            shortCurPosition = priceData
            //If the difference between the start short position and the real price is greater than the reverse volume (e.g. 500), reverse to long.
            if(shortDifferenceFromStart>=reverseVolume){
              console.log('---------',i,shortDifferenceFromStart,shortStartPosition,'->',priceData,shortCurPosition)
              longEnable=true
              isStartedShort= false
            }
          //If the difference is less than the restart volume (e.g. -500) get loss restart short
          }else if(shortDifference<=-restartVolume){
            shortProfit=shortProfit+(shortDifference)*(unitAmount/priceData)
            console.log('shortProfit:',i,shortDifference,priceData,"-",shortCurPosition,"=",shortProfit)
            isStartedShort = false
          }
        }
      }
      i = i + 1
    }
    console.log('longProfit:',unitAmount,longProfit)
    console.log('shortProfit:',unitAmount,shortProfit)
  }

  const calcAlgorithm2=()=>{
    console.log('dayData:',newDays)
    let i=0
    let priceDatas=testData
    let profitVolume=profit
    let reverseVolume=invert
    let restartVolume=-loss
    priceDatas=newDays[0]
    let longStartPosition=0
    let longCurPosition=0
    let longDifference = 0
    let longDifferenceFromStart = 0
    let longProfit = 0
    let longEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let isStartedShort = false
    console.log('priceDatas:',priceDatas)
    for (let priceData of priceDatas) {
      // console.log('priceData:',i,priceData)
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          isStartedLong = true
          console.log('=========longStart',i,longStartPosition)
        }else{
          longDifference = priceData - longCurPosition
          longDifferenceFromStart = priceData - longStartPosition
          console.log('--Diff,real,CurPos=:',i,longDifference,priceData,longCurPosition)
          //If the difference is greater than the profit volume (e.g. 100) get profit
          if(longDifference>=profitVolume){
            longProfit=longProfit+(longDifference)*(unitAmount/priceData)
            console.log('longProfit:',i,longDifference,priceData,"+",longCurPosition,"=",longProfit)
            longCurPosition = priceData
            //If the difference between the start long position and the real price is greater than the reverse volume (e.g. 500), reverse to short.
            if(longDifferenceFromStart>=reverseVolume){
              console.log('=========',i,longDifferenceFromStart,longStartPosition,'->',priceData,longCurPosition)
              longEnable=false
              isStartedLong = false
            }
          //If the difference is less than the restart volume (e.g. -500) get loss restart long
          }else if(longDifference<=-restartVolume){
            longProfit=longProfit+(longDifference)*(unitAmount/priceData)
            
            console.log('longProfit:',i,longDifference,priceData,"-",longCurPosition,"=",longProfit)
            isStartedLong = false
          }
          
        }
      }else{
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          isStartedShort = true
          console.log('=========shortStart',i,shortStartPosition)
        }else{
          shortDifference = shortCurPosition - priceData
          shortDifferenceFromStart = shortStartPosition - priceData
          console.log('==Diff,real,CurPos :',i,shortDifference,priceData,shortCurPosition)
          //If the difference is greater than the profit volum (e.g. 100)
          if(shortDifference>=profitVolume){
            shortProfit=shortProfit+(shortDifference)*(unitAmount/priceData)
            console.log('shortProfit:',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit)
            shortCurPosition = priceData
            //If the difference between the start short position and the real price is greater than the reverse volume (e.g. 500), reverse to long.
            if(shortDifferenceFromStart>=reverseVolume){
              console.log('---------',i,shortDifferenceFromStart,shortStartPosition,'->',priceData,shortCurPosition)
              longEnable=true
              isStartedShort= false
            }
          //If the difference is less than the restart volume (e.g. -500) get loss restart short
          }else if(shortDifference<=-restartVolume){
            shortProfit=shortProfit+(shortDifference)*(unitAmount/priceData)
            console.log('shortProfit:',i,shortDifference,priceData,"-",shortCurPosition,"=",shortProfit)
            isStartedShort = false
          }
        }
      }
      i = i + 1
    }
    console.log('longProfit:',unitAmount,longProfit)
    console.log('shortProfit:',unitAmount,shortProfit)
  }

  const onChangeValue=(value, type)=> {
    console.log('value, type:',value, type)
    if(type=='unitAmount'){
      setUnitAmount(Number(value))
    }
    if(type=='priceVolume'){
      setPriceVolume(Number(value))
    }
    if(type=='priceVolume2'){
      setPriceVolume2(Number(value))
    }
    if(type=='profitVolume'){
      setProfitVolume(Number(value))
    }
    if(type=='longPriceVolume'){
      setLongPriceVolume(Number(value))
    }
    if(type=='amountNumber'){
      setAmountNumber(Number(value))
    }
    if(type=='stopProfitVolume'){
      setStopProfitVolume(Number(value))
    }
    if(type=='lossLimit'){
      setlossLimit(Number(value))
    }
    if(type=='profit'){
      setProfit(Number(value))
    }
    if(type=='invert'){
      setInvert(Number(value))
    }
    if(type=='loss'){
      setloss(Number(value))
    }
    
  }
  const onSetDateRange = (date) => {
    setSelectionRange(date)
    let reverseData={...dataTemp}
    var startDateTime = new Date(date[0].startDate).getTime() ;
    var endDateTime = new Date(date[0].endDate).getTime() ;
    var start=Math.trunc(((startDateTime)/(1000*60*60*24))-(365*51+187))
    var range=((endDateTime-startDateTime)/(1000*60*60*24)+1)*48
    var startPoint=Math.trunc(((startDateTime)/(1000*60*60*24))-(365*51+12))*288
    var endPoint=startPoint+Math.trunc(((endDateTime-startDateTime)/(1000*60*60*24))+1)*288
    console.log('startPoint:',startPoint)
    console.log('endPoint:',endPoint)
    if(startPoint<endPoint){
      let daysTmp=days1[0].slice(startPoint,endPoint)
      console.log('daysTmp:',daysTmp)
      daysTmp=[daysTmp]
      console.log('daysTmp1:',daysTmp)

      setDays(daysTmp)
    }
    console.log('start:',start)
    console.log('range:',range)
    if(start<range){
      
      reverseData=dataTemp.slice(start,range)
      setPriceData(reverseData)
    }
  };
  
  return (
    <Fragment>
      <Row className="display-flex flex-row-reverse mb-4 mr-4">
        <div className="ml-4">
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={realHour}
            onChange={(e)=>{handleRealHour(e)}}
            options={realHours}
            width={200}
          />
        </div>
        <div className="ml-4">
          <Select
            components={{ Input: CustomSelectInput }}
            className="react-select"
            classNamePrefix="react-select"
            name="form-field-name"
            value={period}
            onChange={(e)=>{handlePeriod(e)}}
            options={hourPeriod}
            width={200}
          />
        </div>
        <Button
          style={{alignItems:'center',justifyContent:'center', width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          color={"primary"}
          size="sm"
          className="top-right-button"
        >
        <ExcelFile filename="Bookings" element={<div>Export</div>}>
          <ExcelSheet data={exportData} name="Employees">
            {columns.map((item, idx) => {
              return (
                <ExcelColumn label={item?.Header} value={item?.accessor} />
              )
            })}
          </ExcelSheet>
        </ExcelFile>
        </Button>
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={calcAlgorithm}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc'}
        </Button>
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={calcAlgorithm2}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc 2'}
        </Button>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <Row className="mb-4">
            <div >
                <Label className="mt-4">
                  Profit
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'profit')}} value={profit}/>
              </div>
              <div >
                <Label className="mt-4">
                  Invert
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'invert')}} value={invert}/>
              </div>
              <div >
                <Label className="mt-4">
                  Loss
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'loss')}} value={loss}/>
              </div>
              <div >
                <Label className="mt-4">
                  Amount Unit
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'unitAmount')}} value={unitAmount}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Long Price Volume
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'longPriceVolume')}} value={longPriceVolume}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Short Price Volume
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'priceVolume')}} value={priceVolume}/>
              </div>
              {/* <div className="ml-4">
                <Label className="mt-4">
                  Amount Unit2
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'unitAmount2')}} value={unitAmount2}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Price Volume2
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'priceVolume2')}} value={priceVolume2}/>
              </div> */}
              <div className="ml-4">
                <Label className="mt-4">
                  Profit volume
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'profitVolume')}} value={profitVolume}/>
              </div>
              {/* <div className="ml-4">
                <Label className="mt-4">
                  Stop Profit volume
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'stopProfitVolume')}} value={stopProfitVolume }/>
              </div> */}
              <div className="ml-4">
                <Label className="mt-4">
                  Amount Number
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'amountNumber')}} value={amountNumber}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Loss Limit
                </Label>
                <Input style={{width:100}} onChange={(e)=>{onChangeValue(e.target.value,'lossLimit')}} value={lossLimit}/>
              </div>
            </Row>
            <DateRangePicker
              startDatePlaceholder="Start Date"
              endDatePlaceholder="End Date"
              ranges={selectionRange}
              onChange={selectionRange => onSetDateRange([selectionRange.range])}
              inputRanges={[]}
            />
            {/* <Row>
              <div >
                <Label className="mt-4">
                  profit
                </Label>
                <Input style={{width:100}} disabled value={profit?.toFixed(0)}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  loss
                </Label>
                <Input style={{width:100}} disabled value={loss?.toFixed(0)}/>
              </div>
              <div className="ml-4" >
                <Label className="mt-4">
                  Last Position
                </Label>
                <Input style={{width:100}} disabled value={lastPosition?.toFixed(0)}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Real Price
                </Label>
                <Input style={{width:100}} disabled value={realPrice?.toFixed(0)}/>
              </div>
              <div className="ml-4">
                <Label className="mt-4">
                  Amount
                </Label>
                <Input style={{width:100}} disabled value={amount?.toFixed(0)}/>
              </div>
            </Row>
               */}
          </CardBody>
        </Card>
      </Colxx>

      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <Table>
              <thead>
                <tr>
                <th> No</th>
                <th> Long P</th>
                <th> Long L</th>
                <th> Long Amount</th>
                <th> Long CurPosition</th>
                <th> Long Price</th>
                <th> Short P</th>
                <th> Short L</th>
                <th> Short Amount</th>
                <th> Short CurPosition</th>
                <th> Short Price</th>
                <th> total</th>
                </tr>
              </thead>
              <tbody>
                {
                  (results && results.length > 0) && results.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ verticalAlign: 'middle' }}>{item?.id}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.longProfit}</td>
                        <td style={{ verticalAlign: 'middle',color:item?.longLossActive?'red':'black' }}>{item?.longLoss}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.longAmount}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.longCurPosition}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.longRealPosition}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.shortProfit}</td>
                        <td style={{ verticalAlign: 'middle',color:item?.shortLossActive?'red':'black' }}>{item?.shortLoss}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.shortAmount}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.shortCurPosition}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.shortRealPosition}</td>
                        <td style={{ verticalAlign: 'middle' }}>{item?.dayTotal}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            <div id="chart">
              <Chart options={options} series={series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Colxx>
      {/* <ExcelFile filename="Bookings" element={<div style={{backgroundColor:'red',height:30,width:200}}>Excel (xslx)</div>}>
        <ExcelSheet data={exportData} name="Employees">
          {exportData.map((item, idx) => {
            return (
              <ExcelColumn label={item?.id} value={item?.value} />
            )
          })}
        </ExcelSheet>
      </ExcelFile> */}
      </Fragment>
  )
}
export default Algorithm;

