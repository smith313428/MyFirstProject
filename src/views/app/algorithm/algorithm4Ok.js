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
  data_22_12_17_5m, 
  data_22_12_18_5m, 
  data_22_12_19_5m, 
  data_22_12_20_5m, 
  data_22_12_21_5m, 
  data_22_12_22_5m, 
  data_22_12_23_5m, 
  data_22_12_24_5m, 
  data_22_12_25_5m, 
  data_22_12_26_5m, 
  data_22_12_27_5m, 
  data_22_12_28_5m, 
  data_22_12_29_5m, 
  data_22_12_30_5m,
  data_22_12_31_5m
} from "../../../data/prices";

import {
  
  data_23_01_01_5m, 
  data_23_01_02_5m, 
  data_23_01_03_5m, 
  data_23_01_04_5m, 
  data_23_01_05_5m, 
  data_23_01_06_5m, 
  data_23_01_07_5m, 
  data_23_01_08_5m, 
  data_23_01_09_5m, 
  data_23_01_10_5m, 
  data_23_01_11_5m, 
  data_23_01_12_5m, 
  data_23_01_13_5m, 
  data_23_01_14_5m, 
  data_23_01_15_5m, 
  data_23_01_16_5m, 
  data_23_01_17_5m, 
  data_23_01_18_5m, 
  data_23_01_19_5m, 
  data_23_01_20_5m, 
  data_23_01_21_5m, 
  data_23_01_22_5m, 
  data_23_01_23_5m, 
  data_23_01_24_5m, 
  data_23_01_25_5m, 
  data_23_01_26_5m, 
  data_23_01_27_5m, 
  data_23_01_28_5m, 
  data_23_01_29_5m, 
  data_23_01_30_5m,
  data_23_01_31_5m,

  data_23_02_01_5m, 
  data_23_02_02_5m, 
  data_23_02_03_5m, 
  data_23_02_04_5m, 
  data_23_02_05_5m, 
  data_23_02_06_5m, 
  data_23_02_07_5m, 
  data_23_02_08_5m, 
  data_23_02_09_5m, 
  data_23_02_10_5m, 
  data_23_02_11_5m, 
  data_23_02_12_5m, 
  data_23_02_13_5m, 
  data_23_02_14_5m, 
  data_23_02_15_5m, 
  data_23_02_16_5m, 
  data_23_02_17_5m, 
  data_23_02_18_5m, 
  data_23_02_19_5m, 
  data_23_02_20_5m, 
  data_23_02_21_5m, 
  data_23_02_22_5m, 
  data_23_02_23_5m, 
  data_23_02_24_5m, 
  data_23_02_25_5m, 
  data_23_02_26_5m, 
  data_23_02_27_5m, 
  data_23_02_28_5m, 

  data_23_03_01_5m, 
  data_23_03_02_5m, 
  data_23_03_03_5m, 
  data_23_03_04_5m, 
  data_23_03_05_5m, 
  data_23_03_06_5m, 
  data_23_03_07_5m, 
  data_23_03_08_5m, 
  data_23_03_09_5m, 
  data_23_03_10_5m, 
  data_23_03_11_5m, 
  data_23_03_12_5m, 
  data_23_03_13_5m, 
  data_23_03_14_5m, 
  data_23_03_15_5m, 
  data_23_03_16_5m, 
  data_23_03_17_5m, 
  data_23_03_18_5m, 
  data_23_03_19_5m, 
  data_23_03_20_5m, 
  data_23_03_21_5m, 
  data_23_03_22_5m, 
  data_23_03_23_5m, 
  data_23_03_24_5m, 
  data_23_03_25_5m, 
  data_23_03_26_5m, 
  data_23_03_27_5m, 
  data_23_03_28_5m, 
  data_23_03_29_5m, 
  data_23_03_30_5m,
  data_23_03_31_5m,

  
  data_23_04_01_5m, 
  data_23_04_02_5m, 
  data_23_04_03_5m, 
  data_23_04_04_5m, 
  data_23_04_05_5m, 
  data_23_04_06_5m, 
  data_23_04_07_5m, 
  data_23_04_08_5m, 
  data_23_04_09_5m, 
  data_23_04_10_5m, 
  data_23_04_11_5m, 
  data_23_04_12_5m, 
  data_23_04_13_5m, 
  data_23_04_14_5m, 
  data_23_04_15_5m, 
  data_23_04_16_5m, 
  data_23_04_17_5m, 
  data_23_04_18_5m, 
  data_23_04_19_5m, 
  data_23_04_20_5m, 
  data_23_04_21_5m, 
  data_23_04_22_5m, 
  data_23_04_23_5m, 
  data_23_04_24_5m, 
  data_23_04_25_5m, 
  data_23_04_26_5m, 
  data_23_04_27_5m, 
  data_23_04_28_5m, 
  data_23_04_29_5m, 
  data_23_04_30_5m, 

  data_23_05_01_5m, 
  data_23_05_02_5m, 
  data_23_05_03_5m, 
  data_23_05_04_5m, 
  data_23_05_05_5m, 
  data_23_05_06_5m, 
  data_23_05_07_5m, 
  data_23_05_08_5m, 
  data_23_05_09_5m, 
  data_23_05_10_5m, 
  data_23_05_11_5m, 
  data_23_05_12_5m, 
  data_23_05_13_5m, 
  data_23_05_14_5m, 
  data_23_05_15_5m, 
  data_23_05_16_5m, 
  data_23_05_17_5m, 
  data_23_05_18_5m, 
  data_23_05_19_5m, 
  data_23_05_20_5m, 
  data_23_05_21_5m, 
  data_23_05_22_5m, 
  data_23_05_23_5m, 
  data_23_05_24_5m, 
  data_23_05_25_5m, 
  data_23_05_26_5m, 
  data_23_05_27_5m, 
  data_23_05_28_5m, 
  data_23_05_29_5m, 
  data_23_05_30_5m, 
  data_23_05_31_5m,

  data_23_06_01_5m, 
  data_23_06_02_5m, 
  data_23_06_03_5m, 
  data_23_06_04_5m, 
  data_23_06_05_5m, 
  data_23_06_06_5m, 
  data_23_06_07_5m, 
  data_23_06_08_5m, 
  data_23_06_09_5m, 
  data_23_06_10_5m, 
  data_23_06_11_5m, 
  data_23_06_12_5m, 
  data_23_06_13_5m, 
  data_23_06_14_5m, 
  data_23_06_15_5m, 
  data_23_06_16_5m, 
  data_23_06_17_5m, 
  data_23_06_18_5m, 
  data_23_06_19_5m, 
  data_23_06_20_5m, 
  data_23_06_21_5m, 
  data_23_06_22_5m, 
  data_23_06_23_5m, 
  data_23_06_24_5m, 
  data_23_06_25_5m, 
  data_23_06_26_5m, 
  data_23_06_27_5m, 
  data_23_06_28_5m, 
  data_23_06_29_5m, 
  data_23_06_30_5m, 

  data_23_07_01_5m, 
  data_23_07_02_5m, 
  data_23_07_03_5m, 
  data_23_07_04_5m, 
  data_23_07_05_5m, 
  data_23_07_06_5m, 
  data_23_07_07_5m, 
  data_23_07_08_5m, 
  data_23_07_09_5m, 
  data_23_07_10_5m, 
  data_23_07_11_5m, 
  data_23_07_12_5m, 
  data_23_07_13_5m, 
  data_23_07_14_5m, 
  data_23_07_15_5m, 
  data_23_07_16_5m, 
  data_23_07_17_5m, 
  data_23_07_18_5m, 
  data_23_07_19_5m, 
  data_23_07_20_5m, 
  data_23_07_21_5m, 
  data_23_07_22_5m, 
  data_23_07_23_5m, 
  data_23_07_24_5m, 
  data_23_07_25_5m, 
  data_23_07_26_5m, 
  data_23_07_27_5m, 
  data_23_07_28_5m, 
  data_23_07_29_5m, 
  data_23_07_30_5m, 
  data_23_07_31_5m, 
 
  data_23_08_01_5m, 
  data_23_08_02_5m, 
  data_23_08_03_5m, 
  data_23_08_04_5m, 
  data_23_08_05_5m, 
  data_23_08_06_5m, 
  data_23_08_07_5m, 
  data_23_08_08_5m, 
  data_23_08_09_5m, 
  data_23_08_10_5m, 
  data_23_08_11_5m, 
  data_23_08_12_5m, 
  data_23_08_13_5m, 
  data_23_08_14_5m, 
  data_23_08_15_5m, 
  data_23_08_16_5m, 
  data_23_08_17_5m, 
  data_23_08_18_5m, 
  data_23_08_19_5m, 
  data_23_08_20_5m, 
  data_23_08_21_5m, 
  data_23_08_22_5m, 
  data_23_08_23_5m, 
  data_23_08_24_5m, 
  data_23_08_25_5m, 
  data_23_08_26_5m, 
  data_23_08_27_5m, 
  data_23_08_28_5m, 
  data_23_08_29_5m, 
  data_23_08_30_5m, 
  data_23_08_31_5m, 

  data_23_09_01_5m, 
  data_23_09_02_5m, 
  data_23_09_03_5m, 
  data_23_09_04_5m, 
  data_23_09_05_5m, 
  data_23_09_06_5m, 
  data_23_09_07_5m, 
  data_23_09_08_5m, 
  data_23_09_09_5m, 
  data_23_09_10_5m, 
  data_23_09_11_5m, 
  data_23_09_12_5m, 
  data_23_09_13_5m, 
  data_23_09_14_5m, 
  data_23_09_15_5m, 
  data_23_09_16_5m, 
  data_23_09_17_5m, 
  data_23_09_18_5m, 
  data_23_09_19_5m, 
  data_23_09_20_5m, 
  data_23_09_21_5m, 
  data_23_09_22_5m, 
  data_23_09_23_5m, 
  data_23_09_24_5m, 
  data_23_09_25_5m, 
  data_23_09_26_5m, 
  data_23_09_27_5m, 
  data_23_09_28_5m, 
  data_23_09_29_5m, 
  data_23_09_30_5m, 

  data_23_10_01_5m, 
  data_23_10_02_5m, 
  data_23_10_03_5m, 
  data_23_10_04_5m, 
  data_23_10_05_5m, 
  data_23_10_06_5m, 
  data_23_10_07_5m, 
  data_23_10_08_5m, 
  data_23_10_09_5m, 
  data_23_10_10_5m, 
  data_23_10_11_5m, 
  data_23_10_12_5m, 
  data_23_10_13_5m, 
  data_23_10_14_5m, 
  data_23_10_15_5m, 
  data_23_10_16_5m, 
  data_23_10_17_5m, 
  data_23_10_18_5m, 
  data_23_10_19_5m, 
  data_23_10_20_5m, 
  data_23_10_21_5m, 
  data_23_10_22_5m, 
  data_23_10_23_5m, 
  data_23_10_24_5m, 
  data_23_10_25_5m, 
  data_23_10_26_5m, 
  data_23_10_27_5m, 
  data_23_10_28_5m, 
  data_23_10_29_5m, 
  data_23_10_30_5m, 
  data_23_10_31_5m, 

  data_23_11_01_5m, 
  data_23_11_02_5m, 
  data_23_11_03_5m, 
  data_23_11_04_5m, 
  data_23_11_05_5m, 
  data_23_11_06_5m, 
  data_23_11_07_5m, 
  data_23_11_08_5m, 
  data_23_11_09_5m, 
  data_23_11_10_5m, 
  data_23_11_11_5m, 
  data_23_11_12_5m, 
  data_23_11_13_5m, 
  data_23_11_14_5m, 
  data_23_11_15_5m, 
  data_23_11_16_5m, 
  data_23_11_17_5m, 
  data_23_11_18_5m, 
  data_23_11_19_5m, 
  data_23_11_20_5m, 
  data_23_11_21_5m, 
  data_23_11_22_5m, 
  data_23_11_23_5m, 
  data_23_11_24_5m, 
  data_23_11_25_5m, 
  data_23_11_26_5m, 
  data_23_11_27_5m, 
  data_23_11_28_5m, 
  data_23_11_29_5m, 
  data_23_11_30_5m,

  data_23_12_01_5m, 
  data_23_12_02_5m, 
  data_23_12_03_5m, 
  data_23_12_04_5m, 
  data_23_12_05_5m, 
  data_23_12_06_5m, 
  data_23_12_07_5m, 
  data_23_12_08_5m, 
  data_23_12_09_5m, 
  data_23_12_10_5m, 
  data_23_12_11_5m, 
  data_23_12_12_5m, 
  data_23_12_13_5m, 
  data_23_12_14_5m, 
  data_23_12_15_5m, 
  data_23_12_16_5m, 
  data_23_12_17_5m, 
  data_23_12_18_5m, 
  data_23_12_19_5m, 
  data_23_12_20_5m, 
  data_23_12_21_5m, 
  data_23_12_22_5m, 
  data_23_12_23_5m, 
  data_23_12_24_5m, 
  data_23_12_25_5m, 
  data_23_12_26_5m, 
  data_23_12_27_5m, 
  data_23_12_28_5m, 
  data_23_12_29_5m, 
  data_23_12_30_5m,
  data_23_12_31_5m,
  
} from "../../../data/prices2023";
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
  .concat(data_22_12_17_5m)
  .concat(data_22_12_18_5m)
  .concat(data_22_12_19_5m)
  .concat(data_22_12_20_5m)
  .concat(data_22_12_21_5m)
  .concat(data_22_12_22_5m)
  .concat(data_22_12_23_5m)
  .concat(data_22_12_24_5m)
  .concat(data_22_12_25_5m)
  .concat(data_22_12_26_5m)
  .concat(data_22_12_27_5m)
  .concat(data_22_12_28_5m)
  .concat(data_22_12_29_5m)
  .concat(data_22_12_30_5m)
  .concat(data_22_12_31_5m)


  const daysData_23_01_t=
  data_23_01_01_5m
  .concat(data_23_01_02_5m)
  .concat(data_23_01_03_5m)
  .concat(data_23_01_04_5m)
  .concat(data_23_01_05_5m)
  .concat(data_23_01_06_5m)
  .concat(data_23_01_07_5m)
  .concat(data_23_01_08_5m)
  .concat(data_23_01_09_5m)
  .concat(data_23_01_10_5m)
  .concat(data_23_01_11_5m)
  .concat(data_23_01_12_5m)
  .concat(data_23_01_13_5m)
  .concat(data_23_01_14_5m)
  .concat(data_23_01_15_5m)
  .concat(data_23_01_16_5m)
  .concat(data_23_01_17_5m)
  .concat(data_23_01_18_5m)
  .concat(data_23_01_19_5m)
  .concat(data_23_01_20_5m)
  .concat(data_23_01_21_5m)
  .concat(data_23_01_22_5m)
  .concat(data_23_01_23_5m)
  .concat(data_23_01_24_5m)
  .concat(data_23_01_25_5m)
  .concat(data_23_01_26_5m)
  .concat(data_23_01_27_5m)
  .concat(data_23_01_28_5m)
  .concat(data_23_01_29_5m)
  .concat(data_23_01_30_5m)
  .concat(data_23_01_31_5m)

const daysData_23_02_t=
  data_23_02_01_5m
  .concat(data_23_02_02_5m)
  .concat(data_23_02_03_5m)
  .concat(data_23_02_04_5m)
  .concat(data_23_02_05_5m)
  .concat(data_23_02_06_5m)
  .concat(data_23_02_07_5m)
  .concat(data_23_02_08_5m)
  .concat(data_23_02_09_5m)
  .concat(data_23_02_10_5m)
  .concat(data_23_02_11_5m)
  .concat(data_23_02_12_5m)
  .concat(data_23_02_13_5m)
  .concat(data_23_02_14_5m)
  .concat(data_23_02_15_5m)
  .concat(data_23_02_16_5m)
  .concat(data_23_02_17_5m)
  .concat(data_23_02_18_5m)
  .concat(data_23_02_19_5m)
  .concat(data_23_02_20_5m)
  .concat(data_23_02_21_5m)
  .concat(data_23_02_22_5m)
  .concat(data_23_02_23_5m)
  .concat(data_23_02_24_5m)
  .concat(data_23_02_25_5m)
  .concat(data_23_02_26_5m)
  .concat(data_23_02_27_5m)
  .concat(data_23_02_28_5m)

const daysData_23_03_t=
  data_23_03_01_5m
  .concat(data_23_03_02_5m)
  .concat(data_23_03_03_5m)
  .concat(data_23_03_04_5m)
  .concat(data_23_03_05_5m)
  .concat(data_23_03_06_5m)
  .concat(data_23_03_07_5m)
  .concat(data_23_03_08_5m)
  .concat(data_23_03_09_5m)
  .concat(data_23_03_10_5m)
  .concat(data_23_03_11_5m)
  .concat(data_23_03_12_5m)
  .concat(data_23_03_13_5m)
  .concat(data_23_03_14_5m)
  .concat(data_23_03_15_5m)
  .concat(data_23_03_16_5m)
  .concat(data_23_03_17_5m)
  .concat(data_23_03_18_5m)
  .concat(data_23_03_19_5m)
  .concat(data_23_03_20_5m)
  .concat(data_23_03_21_5m)
  .concat(data_23_03_22_5m)
  .concat(data_23_03_23_5m)
  .concat(data_23_03_24_5m)
  .concat(data_23_03_25_5m)
  .concat(data_23_03_26_5m)
  .concat(data_23_03_27_5m)
  .concat(data_23_03_28_5m)
  .concat(data_23_03_29_5m)
  .concat(data_23_03_30_5m)
  .concat(data_23_03_31_5m)

const daysData_23_04_t=
  data_23_04_01_5m
  .concat(data_23_04_02_5m)
  .concat(data_23_04_03_5m)
  .concat(data_23_04_04_5m)
  .concat(data_23_04_05_5m)
  .concat(data_23_04_06_5m)
  .concat(data_23_04_07_5m)
  .concat(data_23_04_08_5m)
  .concat(data_23_04_09_5m)
  .concat(data_23_04_10_5m)
  .concat(data_23_04_11_5m)
  .concat(data_23_04_12_5m)
  .concat(data_23_04_13_5m)
  .concat(data_23_04_14_5m)
  .concat(data_23_04_15_5m)
  .concat(data_23_04_16_5m)
  .concat(data_23_04_17_5m)
  .concat(data_23_04_18_5m)
  .concat(data_23_04_19_5m)
  .concat(data_23_04_20_5m)
  .concat(data_23_04_21_5m)
  .concat(data_23_04_22_5m)
  .concat(data_23_04_23_5m)
  .concat(data_23_04_24_5m)
  .concat(data_23_04_25_5m)
  .concat(data_23_04_26_5m)
  .concat(data_23_04_27_5m)
  .concat(data_23_04_28_5m)
  .concat(data_23_04_29_5m)
  .concat(data_23_04_30_5m)

const daysData_23_05_t=
  data_23_05_01_5m
  .concat(data_23_05_02_5m)
  .concat(data_23_05_03_5m)
  .concat(data_23_05_04_5m)
  .concat(data_23_05_05_5m)
  .concat(data_23_05_06_5m)
  .concat(data_23_05_07_5m)
  .concat(data_23_05_08_5m)
  .concat(data_23_05_09_5m)
  .concat(data_23_05_10_5m)
  .concat(data_23_05_11_5m)
  .concat(data_23_05_12_5m)
  .concat(data_23_05_13_5m)
  .concat(data_23_05_14_5m)
  .concat(data_23_05_15_5m)
  .concat(data_23_05_16_5m)
  .concat(data_23_05_17_5m)
  .concat(data_23_05_18_5m)
  .concat(data_23_05_19_5m)
  .concat(data_23_05_20_5m)
  .concat(data_23_05_21_5m)
  .concat(data_23_05_22_5m)
  .concat(data_23_05_23_5m)
  .concat(data_23_05_24_5m)
  .concat(data_23_05_25_5m)
  .concat(data_23_05_26_5m)
  .concat(data_23_05_27_5m)
  .concat(data_23_05_28_5m)
  .concat(data_23_05_29_5m)
  .concat(data_23_05_30_5m)
  .concat(data_23_05_31_5m)

const daysData_23_06_t=
  data_23_06_01_5m
  .concat(data_23_06_02_5m)
  .concat(data_23_06_03_5m)
  .concat(data_23_06_04_5m)
  .concat(data_23_06_05_5m)
  .concat(data_23_06_06_5m)
  .concat(data_23_06_07_5m)
  .concat(data_23_06_08_5m)
  .concat(data_23_06_09_5m)
  .concat(data_23_06_10_5m)
  .concat(data_23_06_11_5m)
  .concat(data_23_06_12_5m)
  .concat(data_23_06_13_5m)
  .concat(data_23_06_14_5m)
  .concat(data_23_06_15_5m)
  .concat(data_23_06_16_5m)
  .concat(data_23_06_17_5m)
  .concat(data_23_06_18_5m)
  .concat(data_23_06_19_5m)
  .concat(data_23_06_20_5m)
  .concat(data_23_06_21_5m)
  .concat(data_23_06_22_5m)
  .concat(data_23_06_23_5m)
  .concat(data_23_06_24_5m)
  .concat(data_23_06_25_5m)
  .concat(data_23_06_26_5m)
  .concat(data_23_06_27_5m)
  .concat(data_23_06_28_5m)
  .concat(data_23_06_29_5m)
  .concat(data_23_06_30_5m)

const daysData_23_07_t=
  data_23_07_01_5m
  .concat(data_23_07_02_5m)
  .concat(data_23_07_03_5m)
  .concat(data_23_07_04_5m)
  .concat(data_23_07_05_5m)
  .concat(data_23_07_06_5m)
  .concat(data_23_07_07_5m)
  .concat(data_23_07_08_5m)
  .concat(data_23_07_09_5m)
  .concat(data_23_07_10_5m)
  .concat(data_23_07_11_5m)
  .concat(data_23_07_12_5m)
  .concat(data_23_07_13_5m)
  .concat(data_23_07_14_5m)
  .concat(data_23_07_15_5m)
  .concat(data_23_07_16_5m)
  .concat(data_23_07_17_5m)
  .concat(data_23_07_18_5m)
  .concat(data_23_07_19_5m)
  .concat(data_23_07_20_5m)
  .concat(data_23_07_21_5m)
  .concat(data_23_07_22_5m)
  .concat(data_23_07_23_5m)
  .concat(data_23_07_24_5m)
  .concat(data_23_07_25_5m)
  .concat(data_23_07_26_5m)
  .concat(data_23_07_27_5m)
  .concat(data_23_07_28_5m)
  .concat(data_23_07_29_5m)
  .concat(data_23_07_30_5m)
  .concat(data_23_07_31_5m)

const daysData_23_08_t=
  data_23_08_01_5m
  .concat(data_23_08_02_5m)
  .concat(data_23_08_03_5m)
  .concat(data_23_08_04_5m)
  .concat(data_23_08_05_5m)
  .concat(data_23_08_06_5m)
  .concat(data_23_08_07_5m)
  .concat(data_23_08_08_5m)
  .concat(data_23_08_09_5m)
  .concat(data_23_08_10_5m)
  .concat(data_23_08_11_5m)
  .concat(data_23_08_12_5m)
  .concat(data_23_08_13_5m)
  .concat(data_23_08_14_5m)
  .concat(data_23_08_15_5m)
  .concat(data_23_08_16_5m)
  .concat(data_23_08_17_5m)
  .concat(data_23_08_18_5m)
  .concat(data_23_08_19_5m)
  .concat(data_23_08_20_5m)
  .concat(data_23_08_21_5m)
  .concat(data_23_08_22_5m)
  .concat(data_23_08_23_5m)
  .concat(data_23_08_24_5m)
  .concat(data_23_08_25_5m)
  .concat(data_23_08_26_5m)
  .concat(data_23_08_27_5m)
  .concat(data_23_08_28_5m)
  .concat(data_23_08_29_5m)
  .concat(data_23_08_30_5m)
  .concat(data_23_08_31_5m)

const daysData_23_09_t=
  data_23_09_01_5m
  .concat(data_23_09_02_5m)
  .concat(data_23_09_03_5m)
  .concat(data_23_09_04_5m)
  .concat(data_23_09_05_5m)
  .concat(data_23_09_06_5m)
  .concat(data_23_09_07_5m)
  .concat(data_23_09_08_5m)
  .concat(data_23_09_09_5m)
  .concat(data_23_09_10_5m)
  .concat(data_23_09_11_5m)
  .concat(data_23_09_12_5m)
  .concat(data_23_09_13_5m)
  .concat(data_23_09_14_5m)
  .concat(data_23_09_15_5m)
  .concat(data_23_09_16_5m)
  .concat(data_23_09_17_5m)
  .concat(data_23_09_18_5m)
  .concat(data_23_09_19_5m)
  .concat(data_23_09_20_5m)
  .concat(data_23_09_21_5m)
  .concat(data_23_09_22_5m)
  .concat(data_23_09_23_5m)
  .concat(data_23_09_24_5m)
  .concat(data_23_09_25_5m)
  .concat(data_23_09_26_5m)
  .concat(data_23_09_27_5m)
  .concat(data_23_09_28_5m)
  .concat(data_23_09_29_5m)
  .concat(data_23_09_30_5m)

const daysData_23_10_t=
  data_23_10_01_5m
  .concat(data_23_10_02_5m)
  .concat(data_23_10_03_5m)
  .concat(data_23_10_04_5m)
  .concat(data_23_10_05_5m)
  .concat(data_23_10_06_5m)
  .concat(data_23_10_07_5m)
  .concat(data_23_10_08_5m)
  .concat(data_23_10_09_5m)
  .concat(data_23_10_10_5m)
  .concat(data_23_10_11_5m)
  .concat(data_23_10_12_5m)
  .concat(data_23_10_13_5m)
  .concat(data_23_10_14_5m)
  .concat(data_23_10_15_5m)
  .concat(data_23_10_16_5m)
  .concat(data_23_10_17_5m)
  .concat(data_23_10_18_5m)
  .concat(data_23_10_19_5m)
  .concat(data_23_10_20_5m)
  .concat(data_23_10_21_5m)
  .concat(data_23_10_22_5m)
  .concat(data_23_10_23_5m)
  .concat(data_23_10_24_5m)
  .concat(data_23_10_25_5m)
  .concat(data_23_10_26_5m)
  .concat(data_23_10_27_5m)
  .concat(data_23_10_28_5m)
  .concat(data_23_10_29_5m)
  .concat(data_23_10_30_5m)
  .concat(data_23_10_31_5m)
  const daysData_23_11_t=
  data_23_11_01_5m
  .concat(data_23_11_02_5m)
  .concat(data_23_11_03_5m)
  .concat(data_23_11_04_5m)
  .concat(data_23_11_05_5m)
  .concat(data_23_11_06_5m)
  .concat(data_23_11_07_5m)
  .concat(data_23_11_08_5m)
  .concat(data_23_11_09_5m)
  .concat(data_23_11_10_5m)
  .concat(data_23_11_11_5m)
  .concat(data_23_11_12_5m)
  .concat(data_23_11_13_5m)
  .concat(data_23_11_14_5m)
  .concat(data_23_11_15_5m)
  .concat(data_23_11_16_5m)
  .concat(data_23_11_17_5m)
  .concat(data_23_11_18_5m)
  .concat(data_23_11_19_5m)
  .concat(data_23_11_20_5m)
  .concat(data_23_11_21_5m)
  .concat(data_23_11_22_5m)
  .concat(data_23_11_23_5m)
  .concat(data_23_11_24_5m)
  .concat(data_23_11_25_5m)
  .concat(data_23_11_26_5m)
  .concat(data_23_11_27_5m)
  .concat(data_23_11_28_5m)
  .concat(data_23_11_29_5m)
  .concat(data_23_11_30_5m)
  const daysData_23_12_t=
  data_23_12_01_5m
  .concat(data_23_12_02_5m)
  .concat(data_23_12_03_5m)
  .concat(data_23_12_04_5m)
  .concat(data_23_12_05_5m)
  .concat(data_23_12_06_5m)
  .concat(data_23_12_07_5m)
  .concat(data_23_12_08_5m)
  .concat(data_23_12_09_5m)
  .concat(data_23_12_10_5m)
  .concat(data_23_12_11_5m)
  .concat(data_23_12_12_5m)
  .concat(data_23_12_13_5m)
  .concat(data_23_12_14_5m)
  .concat(data_23_12_15_5m)
  .concat(data_23_12_16_5m)
  .concat(data_23_12_17_5m)
  .concat(data_23_12_18_5m)
  .concat(data_23_12_19_5m)
  .concat(data_23_12_20_5m)
  .concat(data_23_12_21_5m)
  .concat(data_23_12_22_5m)
  .concat(data_23_12_23_5m)
  .concat(data_23_12_24_5m)
  .concat(data_23_12_25_5m)
  .concat(data_23_12_26_5m)
  .concat(data_23_12_27_5m)
  .concat(data_23_12_28_5m)
  .concat(data_23_12_29_5m)
  .concat(data_23_12_30_5m)
  .concat(data_23_12_31_5m)


  const daysData_2021_01_2023_12_5m_temp = 
  daysData_21_01_t.concat(daysData_21_02_t).concat(daysData_21_03_t).concat(daysData_21_04_t).concat(daysData_21_05_t).concat(daysData_21_06_t).concat(daysData_21_07_t).concat(daysData_21_08_t).concat(daysData_21_09_t).concat(daysData_21_10_t).concat(daysData_21_11_t).concat(daysData_21_12_t)
  .concat(daysData_22_01_t).concat(daysData_22_02_t).concat(daysData_22_03_t).concat(daysData_22_04_t).concat(daysData_22_05_t).concat(daysData_22_06_t).concat(daysData_22_07_t).concat(daysData_22_08_t).concat(daysData_22_09_t).concat(daysData_22_10_t).concat(daysData_22_11_t).concat(daysData_22_12_t)
  .concat(daysData_23_01_t).concat(daysData_23_02_t).concat(daysData_23_03_t).concat(daysData_23_04_t).concat(daysData_23_05_t).concat(daysData_23_06_t).concat(daysData_23_07_t).concat(daysData_23_08_t).concat(daysData_23_09_t).concat(daysData_23_10_t).concat(daysData_23_11_t).concat(daysData_23_12_t)

  const daysData_2021_01_2023_12_5m = [daysData_2021_01_2023_12_5m_temp]

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
  20000,20100,20200,20300,20400,20500,20500,20400,20300,20200,20100,20000,
  20000,20100,20200,20300,20400,20500,20500,20400,20300,20200,20100,20000,
  20000,20100,20200,20300,20400,20500,20600,20700,20800,20800,21000,21000,
  21000,20900,20800,20700,20600,20500,20500,20400,20300,20200,20100,20000,
  20000,19900,19800,19700,19600,19500,19500,19400,19300,19200,19100,19000,
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
  const [amountNumber, setAmountNumber] = useState(20)
  const [unitAmount, setUnitAmount] = useState(1000)
  const [daysSample, setDaysSample] = useState(sampleData)
  const [days, setDays] = useState(daysData_2021_01_2023_12_5m) //daysData_22_07_m
  const [days1, setDays1] = useState(daysData_2021_01_2023_12_5m) //daysData_22_07_m
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
  const [profit, setProfit] = useState(500)
  const [invert, setInvert] = useState(500)
  const [loss, setloss] = useState(200)
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
  const calcAlgorithm4=()=>{
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
    let longLoss = 0
    let longEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let shortLoss = 0
    let isStartedShort = false
    let dayTotal=0
    let dayLongTotal=0
    let dayShortTotal=0
    let dayLongTotalArray=[]
    let dayShortTotalArray=[]
    let dayTotalArray=[]
    let isHalfLoss = false
    let isHalfShortLoss = false
    let amount = unitAmount
    console.log('priceDatas:',priceDatas)
    let feePercent = amountNumber
    let longProfitIndex = 0
    let longLossIndex = 0
    let shortProfitIndex = 0
    let shortLossIndex = 0
    let longProfitIndex2 = 0
    let longLossIndex2 = 0
    let shortProfitIndex2 = 0
    let shortLossIndex2 = 0
    for (let priceData of priceDatas) {
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          longLoss=longLoss - (feePercent/2)*(amount/priceData)
          isStartedLong = true
          isHalfLoss = false 
        }else{
          longDifference = priceData - longCurPosition
          longDifferenceFromStart = priceData - longStartPosition

          // //If the difference is greater than the profit volume (e.g. 100) get profit
          // if(longDifference>=profitVolume){
          //   longProfit=longProfit+(longDifference)*(unitAmount/priceData)
          //   console.log('longProfit:',i,longDifference,priceData,"+",longCurPosition,"=",longProfit)
          //   isStartedLong = false
          // }
          // else if(longDifference<=restartVolume){
          //   // longLoss=longLoss+(longDifference)*((unitAmount)/priceData)
          //   isStartedLong = false
          // }


          // console.log('priceData:',i,longDifference, priceData, "+",longCurPosition)
          //차이가 profitVolume이상이면 익절하고 longCurPositoin을 갱신(long다시 시작)
          if(longDifference>=profitVolume){
            if(isHalfLoss){
              longProfit=longProfit+(longDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }else{
              longProfit=longProfit+(longDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }
            // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, amount)
            longProfitIndex = longProfitIndex +1
            // amount = amount + Number((longProfit).toFixed(0))
            isStartedLong = false
          }else {
            //절반손절평가
            //절반손절이 아닌 경우
            if (!isHalfLoss){
              // //차이가 restartVolume이하이면 절반손절
              // if(longDifference<=restartVolume){
              //   longLoss=longLoss+(longDifference)*((amount/2)/priceData)- (feePercent/2)*(amount/priceData)
              //   isHalfLoss = true     
              //   // amount = amount + Number((longLoss).toFixed(0))        
              //   console.log('longProfit===L3',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
              //   longLossIndex = longLossIndex +1
              // }

              //차이가 restartVolume이하이면 손절
              if(longDifference<=restartVolume){
                longLoss=longLoss+(longDifference)*((amount)/priceData)- (feePercent/2)*(amount/priceData)
                isHalfLoss = true    
                // amount = amount + Number((longLoss).toFixed(0))        
                // console.log('longProfit===L3',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
                longLossIndex = longLossIndex +1
              }


            //이미 절반손절인 경우
            }else{

              // //절반손절된 상태에서 longCurPositioin으로부터 2*restartVolume이하이면 끌어내리고 longCurPositioin갱신
              // if (longDifference<=200*restartVolume){
              //   longCurPosition = longCurPosition - (longCurPosition- priceData)/2
              //   longLoss=longLoss - (feePercent/2)*(amount/priceData)
              //   console.log('longProfit===4',i,longDifference, priceData,"+",longCurPosition.toFixed(0))
              //   longLossIndex2 = longLossIndex2 +1
              //   isHalfLoss = false 
              // }


              //절반손절된 상태에서 longCurPositioin으로부터 2*restartVolume이하이면 끌어내리고 longCurPositioin갱신
              if (longDifference<=2*restartVolume){
                isStartedLong = false
                longLoss=longLoss - (feePercent/2)*(amount/priceData)
                // console.log('longProfit===4',i,longDifference, priceData,"+",longCurPosition.toFixed(0))
                longLossIndex2 = longLossIndex2 +1
                isHalfLoss = false 
                console.log("----------")
              }


            }
          }


        }
      }



      if(longEnable){
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          isStartedShort = true
          isHalfShortLoss = false 
          shortLoss=shortLoss - (feePercent/2)*(amount/priceData)
        }else{
          shortDifference = shortCurPosition - priceData
          shortDifferenceFromStart = priceData - shortStartPosition

          // //If the difference is greater than the profit volume (e.g. 100) get profit
          // if(shortDifference>=profitVolume){
          //   shortProfit=shortProfit+(shortDifference)*(unitAmount/priceData)
          //   console.log('shortProfit:',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit)
          //   isStartedShort = false
          // }
          // else if(shortDifference<=restartVolume){
          //   // shortLoss=shortLoss+(shortDifference)*((unitAmount)/priceData)
          //   isStartedShort = false
          // }


          // console.log('priceData:',i,shortDifference, priceData, "+",shortCurPosition)
          //차이가 profitVolume이상이면 익절하고 shortCurPositoin을 갱신(short다시 시작)
          if(shortDifference>=profitVolume){
            if(isHalfShortLoss){
              shortProfit=shortProfit+(shortDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }else{
              shortProfit=shortProfit+(shortDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }
            
            // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, amount)
            shortProfitIndex = shortProfitIndex +1
            // amount = amount + Number((shortProfit).toFixed(0))
            isStartedShort = false
          }else {
            //절반손절평가
            //절반손절이 아닌경우
            if (!isHalfShortLoss){


              // //차이가 restartVolume이하이면 절반손절
              // if(shortDifference<=restartVolume){
              //   shortLoss=shortLoss+(shortDifference)*((amount/2)/priceData) - (feePercent/2)*(amount/priceData)
              //   isHalfShortLoss = true     
              //   // amount = amount + Number((shortLoss).toFixed(0))        
              //   // console.log('shortProfit===L3',i,shortDifference,priceData,"-",shortCurPosition,"=",shortLoss, amount)
              //   shortLossIndex = shortLossIndex +1
              // }


              //차이가 restartVolume이하이면 손절
              if(shortDifference<=restartVolume){
                shortLoss=shortLoss+(shortDifference)*((amount)/priceData) - (feePercent/2)*(amount/priceData)
                isHalfShortLoss = true     
                // amount = amount + Number((shortLoss).toFixed(0))        
                // console.log('shortProfit===L3',i,shortDifference,priceData,"-",shortCurPosition,"=",shortLoss, amount)
                shortLossIndex = shortLossIndex +1
              }


            //이미 절반손절인 경우
            }else{

              // //절반손절된 상태에서 shortCurPositioin으로부터 2*restartVolume이하이면 끌어내리고 shortCurPositioin갱신
              // if (shortDifference<=2*restartVolume){
              //   shortCurPosition = shortCurPosition + (priceData - shortCurPosition)/2
              //   shortLoss=shortLoss - (feePercent/2)*(amount/priceData)
              //   shortLossIndex2 = shortLossIndex2 +1
              //   // console.log('shortProfit===4',i,shortDifference, priceData,"+",shortCurPosition.toFixed(0))
              //   isHalfShortLoss = false 
              // }


              //절반손절된 상태에서 shortCurPositioin으로부터 2*restartVolume이하이면 끌어내리고 shortCurPositioin갱신
              if (shortDifference<=2*restartVolume){
                isStartedShort = false
                shortLoss=shortLoss - (feePercent/2)*(amount/priceData)
                // console.log('shortProfit===4',i,shortDifference, priceData,"+",shortCurPosition.toFixed(0))
                shortLossIndex2 = shortLossIndex2 +1
                isHalfShortLoss = false 
              }


            }
          }


        }
      }
      dayTotal=(longProfit+longLoss+shortProfit+shortLoss)
      dayLongTotal=(longProfit+longLoss)
      dayShortTotal=(shortProfit+shortLoss)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        dayTotalArray.push(dayTotal.toFixed(0))
        dayLongTotalArray.push(dayLongTotal.toFixed(0))
        dayShortTotalArray.push(dayShortTotal.toFixed(0))
      }
      let seriesTmp=[
        { name: "Total", data: dayTotalArray},
        { name: "Long", data: dayLongTotalArray},
        { name: "Short", data: dayShortTotalArray},
      ]
      setSeries(seriesTmp)
      i = i + 1
    }
    console.log('longProfit:',unitAmount,longProfit.toFixed(0), longLoss.toFixed(0),(longProfit+ longLoss).toFixed(0), )
    console.log('shortProfit:',unitAmount,shortProfit.toFixed(0), shortLoss.toFixed(0),(shortProfit+shortLoss).toFixed(0))
    console.log('longProfitIndex:',longProfitIndex, longLossIndex, longProfitIndex2, longLossIndex2)
    console.log('shortProfitIndex:', shortProfitIndex, shortLossIndex,shortProfitIndex2, shortLossIndex2)
  }

  //표준
  const calcAlgorithm4_1=()=>{
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
    let longProfit1 = 0
    let longLoss = 0
    let longLoss1 = 0
    let longLoss2 = 0
    let longEnable = true
    let shortEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let shortProfit1 = 0
    let shortLoss = 0
    let shortLoss1 = 0
    let shortLoss2 = 0
    let isStartedShort = false
    let dayTotal=0
    let dayLongTotal=0
    let dayShortTotal=0
    let dayLongTotalArray=[]
    let dayShortTotalArray=[]
    let dayTotalArray=[]
    let isHalfLoss = false
    let isHalfShortLoss = false
    let amount = unitAmount
    console.log('priceDatas:',priceDatas)
    let feePercent = amountNumber

    let longStartIndex =0
    let longHalfIndex1 =0
    let longHalfIndex2 =0
    let longProfitIndex1 = 0
    let longLossIndex1 = 0
    let shortProfitIndex1 = 0
    let shortLossIndex1 = 0

    let shortStartIndex =0
    let shortHalfIndex1 =0
    let shortHalfIndex2 =0
    let longProfitIndex2 = 0
    let longLossIndex2 = 0
    let shortProfitIndex2 = 0
    let shortLossIndex2 = 0

    
    let isHalfLossPending = false
    let isHalfShortLossPending = false
    let amountTemp = unitAmount
    
    for (let priceData of priceDatas) {
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          longLoss=longLoss - (feePercent/2)*(amount/priceData)
          amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
          longStartIndex =longStartIndex+1
          isStartedLong = true
          isHalfLoss = false 
        }else{
          
          longDifference = priceData - longCurPosition

          // console.log('priceData:',i,longDifference, priceData, "+",longCurPosition)
          //차이가 profitVolume이상이면 익절하고 longCurPositoin을 갱신(long다시 시작)

          if(!isHalfLoss){
            if(longDifference>=profitVolume){
              longProfit=longProfit+(longDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, amount)
              longProfitIndex1 = longProfitIndex1 +1
              isStartedLong = false
              amountTemp = amountTemp +(longDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }else{
              //차이가 restartVolume이하이면 손절
              if(longDifference<=restartVolume){
                longLoss=longLoss+(longDifference)*((amount)/priceData)- (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp +(longDifference)*((amount)/priceData)- (feePercent/2)*(amount/priceData)
                isHalfLoss = true    
                isHalfLossPending = true
                // console.log('longProfit===L3',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
                longLossIndex1 = longLossIndex1 +1
              }
            }
          }else{
            if(isHalfLossPending){
              //다시 올라와 차이가 restartVolume/2(-100)이상으로 줄어들면 다시 longCurPosition 갱신
              if(longDifference>=restartVolume/2){
                longLoss1=longLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
                // longCurPosition = priceData
                isHalfLossPending = false
                longHalfIndex1 = longHalfIndex1 +1
              }else{
                //더 내려가 차이가 2*restartVolume2(-400)이하로 되면 다시 시작
                if (longDifference<=2*restartVolume){
                  isStartedLong = false
                  longLoss2=longLoss2 - (feePercent/2)*(amount/priceData)
                  amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
                  // console.log('longProfit===4',i,longDifference, priceData,"+",longCurPosition.toFixed(0))
                  longLossIndex2 = longLossIndex2 +1
                }
              }
            }else{
              //다시 내려가 차이가 restartVolume/2(-100)이하으로 되면 다시 longCurPosition 없애기
              if(longDifference<=restartVolume/2){
                longLoss1=longLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
                isHalfLossPending = true
                longHalfIndex2 = longHalfIndex2 +1
              }
              if(longDifference>=profitVolume){
                longProfit1=longProfit1+(longDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, amount)
                longProfitIndex2 = longProfitIndex2 +1
                amountTemp = amountTemp +(longDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                isStartedLong = false
              }
            }
            
            
          }


        }
      }


      if(shortEnable){
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          shortLoss=shortLoss - (feePercent/2)*(amount/priceData)
          amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
          shortStartIndex =shortStartIndex +1
          isStartedShort = true
          isHalfShortLoss = false 
        }else{
          shortDifference = shortCurPosition -priceData 

          // console.log('priceData:',i,shortDifference, priceData, "+",shortCurPosition)
          //차이가 profitVolume이상이면 익절하고 shortCurPositoin을 갱신(short다시 시작)

          if(!isHalfShortLoss){
            if(shortDifference>=profitVolume){
              shortProfit=shortProfit+(shortDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              amountTemp = amountTemp+(shortDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, amount)
              shortProfitIndex1 = shortProfitIndex1 +1
              isStartedShort = false
            }else{
              //차이가 restartVolume이하이면 손절
              if(shortDifference<=restartVolume){
                shortLoss=shortLoss+(shortDifference)*((amount)/priceData)- (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp+(shortDifference)*((amount)/priceData)- (feePercent/2)*(amount/priceData)
                isHalfShortLoss = true    
                isHalfShortLossPending = true
                // console.log('shortProfit===L3',i,shortDifference,priceData,"-",shortCurPosition,"=",shortLoss, amount)
                shortLossIndex1 = shortLossIndex1 +1
              }
            }
          }else{
            if(isHalfShortLossPending){
              //다시 올라와 차이가 restartVolume/2이상으로 줄어들면 다시 shortCurPosition 갱신
              if(shortDifference>=restartVolume/2){
                shortLoss1=shortLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
                // shortCurPosition = priceData
                isHalfShortLossPending = false
                shortHalfIndex1 = shortHalfIndex1 +1
              }else{
                //더 내려가 차이가 2*restartVolume2이하로 되면 다시 시작
                if (shortDifference<=2*restartVolume){
                  isStartedShort = false
                  shortLoss2=shortLoss2 - (feePercent/2)*(amount/priceData)
                  amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
                  // console.log('shortProfit===4',i,shortDifference, priceData,"+",shortCurPosition.toFixed(0))
                  shortLossIndex2 = shortLossIndex2 +1
                }
              }
            }else{
              if(shortDifference<=restartVolume/2){
                shortLoss1=shortLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
                isHalfShortLossPending = true
                shortHalfIndex2 = shortHalfIndex2 +1
              }
              if(shortDifference>=profitVolume){
                shortProfit1=shortProfit1+(shortDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp+(shortDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, amount)
                shortProfitIndex2 = shortProfitIndex2 +1
                isStartedShort = false
              }
            }
            
            
          }


        }
      }

         
      dayTotal=(
        longProfit+
        longProfit1+
        longLoss+
        longLoss1+
        longLoss2+
        shortProfit+
        shortProfit1+
        shortLoss+
        shortLoss1+
        shortLoss2
        )      
      dayLongTotal=(longProfit+longProfit1+longLoss+longLoss1+longLoss2)
      dayShortTotal=(shortProfit+shortProfit1+shortLoss+shortLoss1+shortLoss2)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        dayTotalArray.push(dayTotal.toFixed(0))
        dayLongTotalArray.push(dayLongTotal.toFixed(0))
        dayShortTotalArray.push(dayShortTotal.toFixed(0))
      }
      let seriesTmp=[
        { name: "Total", data: dayTotalArray},
        { name: "Long", data: dayLongTotalArray},
        { name: "Short", data: dayShortTotalArray},
      ]
      setSeries(seriesTmp)
      i = i + 1
    }
    console.log("amountTemp===",amountTemp)
    console.log('longProfit=====',unitAmount,longProfit.toFixed(0), longLoss.toFixed(0),(longProfit+ longLoss).toFixed(0), )
    console.log('shortProfit=====',unitAmount,shortProfit.toFixed(0), shortLoss.toFixed(0),(shortProfit+shortLoss).toFixed(0))
    console.log('longProfit:',longProfit.toFixed(0), longProfit1.toFixed(0), )
    console.log('longLoss:',longLoss.toFixed(0),longLoss1.toFixed(0),longLoss2.toFixed(0), )
    console.log('shortProfit:',shortProfit.toFixed(0), shortProfit1.toFixed(0) )
    console.log('shortLoss:',shortLoss.toFixed(0),shortLoss1.toFixed(0), shortLoss2.toFixed(0))
    console.log('longProfitIndex:', longProfitIndex1, longProfitIndex2)
    console.log('longLossIndex1:',longLossIndex1, )
    console.log('longLossIndex2:',longLossIndex2, longHalfIndex1, longHalfIndex2)
    console.log('shortProfitIndex:', shortProfitIndex1, shortProfitIndex2)
    console.log('shortLossIndex1:',shortLossIndex1, )
    console.log('shortLossIndex2:',shortLossIndex2, shortHalfIndex1, shortHalfIndex2)
  }
  //amount 실시간적으로 갱신 
  const calcAlgorithm4_3=()=>{
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
    let longProfit1 = 0
    let longLoss = 0
    let longLoss1 = 0
    let longLoss2 = 0
    let longEnable = true
    let shortEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let shortProfit1 = 0
    let shortLoss = 0
    let shortLoss1 = 0
    let shortLoss2 = 0
    let isStartedShort = false
    let dayTotal=0
    let dayLongTotal=0
    let dayShortTotal=0
    let dayLongTotalArray=[]
    let dayShortTotalArray=[]
    let dayTotalArray=[]
    let isHalfLoss = false
    let isHalfShortLoss = false
    let amount = unitAmount
    console.log('priceDatas:',priceDatas)
    let feePercent = amountNumber

    let longStartIndex =0
    let longHalfIndex1 =0
    let longHalfIndex2 =0
    let longProfitIndex1 = 0
    let longLossIndex1 = 0
    let shortProfitIndex1 = 0
    let shortLossIndex1 = 0

    let shortStartIndex =0
    let shortHalfIndex1 =0
    let shortHalfIndex2 =0
    let longProfitIndex2 = 0
    let longLossIndex2 = 0
    let shortProfitIndex2 = 0
    let shortLossIndex2 = 0

    
    let isHalfLossPending = false
    let isHalfShortLossPending = false
    let realAmount = unitAmount
    
    for (let priceData of priceDatas) {
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          longLoss=longLoss - (feePercent/2)*(realAmount/priceData)
          realAmount = realAmount - (feePercent/2)*(realAmount/priceData)
          longStartIndex =longStartIndex+1
          isStartedLong = true
          isHalfLoss = false 
        }else{
          
          longDifference = priceData - longCurPosition

          // console.log('priceData:',i,longDifference, priceData, "+",longCurPosition)
          //차이가 profitVolume(500)이상이면 익절하고 longCurPositoin을 갱신(long다시 시작)
          if(!isHalfLoss){
            if(longDifference>=profitVolume){
              longProfit=longProfit+(longDifference)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
              // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, realAmount)
              longProfitIndex1 = longProfitIndex1 +1
              isStartedLong = false
              realAmount = realAmount +(longDifference)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
            }else{
              //차이가 restartVolume(-200)이하이면 손절
              if(longDifference<=restartVolume){
                longLoss=longLoss+(longDifference)*((realAmount)/priceData)- (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount +(longDifference)*((realAmount)/priceData)- (feePercent/2)*(realAmount/priceData)
                isHalfLoss = true    
                isHalfLossPending = true
                // console.log('longProfit===L3',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, realAmount)
                longLossIndex1 = longLossIndex1 +1
              }
            }
          }else{
            if(isHalfLossPending){
              //다시 올라와 차이가 restartVolume/2(-100)이상으로 줄어들면 다시 longCurPosition 갱신
              if(longDifference>=restartVolume/2){
                longLoss1=longLoss1 - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount - (feePercent/2)*(realAmount/priceData)
                // longCurPosition = priceData
                isHalfLossPending = false
                longHalfIndex1 = longHalfIndex1 +1
              }else{
                //더 내려가 차이가 2*restartVolume2(-400)이하로 되면 다시 시작
                if (longDifference<=2*restartVolume){
                  isStartedLong = false
                  longLoss2=longLoss2 - (feePercent/2)*(realAmount/priceData)
                  realAmount = realAmount - (feePercent/2)*(realAmount/priceData)
                  // console.log('longProfit===4',i,longDifference, priceData,"+",longCurPosition.toFixed(0))
                  longLossIndex2 = longLossIndex2 +1
                }
              }
            }else{
              //다시 내려가 차이가 restartVolume/2(-100)이하로 되면 다시 longCurPosition 없애기
              if(longDifference<=restartVolume/2){
                longLoss1=longLoss1 - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount - (feePercent/2)*(realAmount/priceData)
                isHalfLossPending = true
                longHalfIndex2 = longHalfIndex2 +1
              }
              //차이가 profitVolume + restartVolume/2 (600)이상이면 익절하고 longCurPositoin을 갱신(long다시 시작)
              if(longDifference>=profitVolume){
                longProfit1=longProfit1+(longDifference-restartVolume/2)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount +(longDifference-restartVolume/2)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
                // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, realAmount)
                longProfitIndex2 = longProfitIndex2 +1
                isStartedLong = false
              }
            }
            
            
          }


        }
      }


      if(shortEnable){
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          shortLoss=shortLoss - (feePercent/2)*(realAmount/priceData)
          realAmount = realAmount- (feePercent/2)*(realAmount/priceData)
          shortStartIndex =shortStartIndex +1
          isStartedShort = true
          isHalfShortLoss = false 
        }else{
          shortDifference = shortCurPosition -priceData 

          // console.log('priceData:',i,shortDifference, priceData, "+",shortCurPosition)
          //차이가 profitVolume이상이면 익절하고 shortCurPositoin을 갱신(short다시 시작)
          if(!isHalfShortLoss){
            if(shortDifference>=profitVolume){
              shortProfit=shortProfit+(shortDifference)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
              realAmount = realAmount+(shortDifference)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
              // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, realAmount)
              shortProfitIndex1 = shortProfitIndex1 +1
              isStartedShort = false
            }else{
              //차이가 restartVolume이하이면 손절
              if(shortDifference<=restartVolume){
                shortLoss=shortLoss+(shortDifference)*((realAmount)/priceData)- (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount+(shortDifference)*((realAmount)/priceData)- (feePercent/2)*(realAmount/priceData)
                isHalfShortLoss = true    
                isHalfShortLossPending = true
                // console.log('shortProfit===L3',i,shortDifference,priceData,"-",shortCurPosition,"=",shortLoss, realAmount)
                shortLossIndex1 = shortLossIndex1 +1
              }
            }
          }else{
            if(isHalfShortLossPending){
              //다시 내려와 차이가 restartVolume/2(-100)이상으로 줄어들면 다시 shortCurPosition 새로 잡기
              if(shortDifference>=restartVolume/2){
                shortLoss1=shortLoss1 - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount- (feePercent/2)*(realAmount/priceData)
                // shortCurPosition = priceData
                isHalfShortLossPending = false
                shortHalfIndex1 = shortHalfIndex1 +1
              }else{
                //더 올라와 차이가 2*restartVolume(-400)이하로 되면 다시 시작
                if (shortDifference<=2*restartVolume){
                  isStartedShort = false
                  shortLoss2=shortLoss2 - (feePercent/2)*(realAmount/priceData)
                  realAmount = realAmount- (feePercent/2)*(realAmount/priceData)
                  // console.log('shortProfit===4',i,shortDifference, priceData,"+",shortCurPosition.toFixed(0))
                  shortLossIndex2 = shortLossIndex2 +1
                }
              }
            }else{
              //다시 올라가 차이가 restartVolume/2(-100)이하로 되면 다시 longCurPosition 없애기
              if(shortDifference<=(restartVolume/2)){
                shortLoss1=shortLoss1 - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount- (feePercent/2)*(realAmount/priceData)
                isHalfShortLossPending = true
                shortHalfIndex2 = shortHalfIndex2 +1
              }
              //차이가 profitVolume + restartVolume/2 (600)이상이면 익절하고 shortCurPositoin을 갱신(short다시 시작)
              if(shortDifference>=profitVolume){
                shortProfit1=shortProfit1+(shortDifference-restartVolume/2)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
                realAmount = realAmount+(shortDifference-restartVolume/2)*(realAmount/priceData) - (feePercent/2)*(realAmount/priceData)
                // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, realAmount)
                shortProfitIndex2 = shortProfitIndex2 +1
                isStartedShort = false
              }
            }
            
            
          }


        }
      }

      

      dayTotal=(longProfit+longProfit1+longLoss+longLoss1+longLoss2+shortProfit+shortProfit1+shortLoss+shortLoss1+shortLoss2)
      
      dayLongTotal=(longProfit+longProfit1+longLoss+shortLoss1+shortLoss2)
      dayShortTotal=(shortProfit+shortProfit1+shortLoss+shortLoss1+shortLoss2)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        dayTotalArray.push(dayTotal.toFixed(0))
        dayLongTotalArray.push(dayLongTotal.toFixed(0))
        dayShortTotalArray.push(dayShortTotal.toFixed(0))
      }
      let seriesTmp=[
        { name: "Total", data: dayTotalArray},
        { name: "Long", data: dayLongTotalArray},
        { name: "Short", data: dayShortTotalArray},
      ]
      setSeries(seriesTmp)
      i = i + 1
    }
    console.log("realAmount===",realAmount)
    console.log('longProfit=====',unitAmount,longProfit.toFixed(0), longLoss.toFixed(0),(longProfit+ longLoss).toFixed(0), )
    console.log('shortProfit=====',unitAmount,shortProfit.toFixed(0), shortLoss.toFixed(0),(shortProfit+shortLoss).toFixed(0))
    console.log('longProfit:',longProfit.toFixed(0), longProfit1.toFixed(0), )
    console.log('longLoss:',longLoss.toFixed(0),longLoss1.toFixed(0),longLoss2.toFixed(0), )
    console.log('shortProfit:',shortProfit.toFixed(0), shortProfit1.toFixed(0) )
    console.log('shortLoss:',shortLoss.toFixed(0),shortLoss1.toFixed(0), shortLoss2.toFixed(0))
    console.log('longProfitIndex:', longProfitIndex1, longProfitIndex2)
    console.log('longLossIndex1:',longLossIndex1, )
    console.log('longLossIndex2:',longLossIndex2, longHalfIndex1, longHalfIndex2)
    console.log('shortProfitIndex:', shortProfitIndex1, shortProfitIndex2)
    console.log('shortLossIndex1:',shortLossIndex1, )
    console.log('shortLossIndex2:',shortLossIndex2, shortHalfIndex1, shortHalfIndex2)
  }

  //손실큼 절반손절방식
  const calcAlgorithm4_2=()=>{
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
    let longDifferenceFromHalfPosition = 0
    let longDifferenceFromStart = 0
    let longProfit = 0
    let longProfit1 = 0
    let longLoss = 0
    let longLoss1 = 0
    let longLoss2 = 0
    let longEnable = true
    let shortEnable = true
    let isStartedLong = false
    let shortStartPosition=0
    let shortCurPosition=0
    let shortDifference = 0
    let shortDifferenceFromStart = 0
    let shortProfit = 0
    let shortProfit1 = 0
    let shortLoss = 0
    let shortLoss1 = 0
    let shortLoss2 = 0
    let isStartedShort = false
    let dayTotal=0
    let dayLongTotal=0
    let dayShortTotal=0
    let dayLongTotalArray=[]
    let dayShortTotalArray=[]
    let dayTotalArray=[]
    let isHalfLoss = false
    let isHalfShortLoss = false
    let amount = unitAmount
    console.log('priceDatas:',priceDatas)
    let feePercent = amountNumber

    let longStartIndex =0
    let longHalfIndex1 =0
    let longHalfIndex2 =0
    let longProfitIndex1 = 0
    let longLossIndex1 = 0
    let shortProfitIndex1 = 0
    let shortLossIndex1 = 0

    let shortStartIndex =0
    let shortHalfIndex1 =0
    let shortHalfIndex2 =0
    let longProfitIndex2 = 0
    let longLossIndex2 = 0
    let shortProfitIndex2 = 0
    let shortLossIndex2 = 0

    
    let isHalfLossPending = false
    let longHalfPosition = 0
    let isHalfShortLossPending = false
    let shortHalfPosition = 0
    let amountTemp = unitAmount
    
    for (let priceData of priceDatas) {
      if(longEnable){
        if(!isStartedLong){
          longStartPosition = priceData
          longCurPosition = priceData
          longLoss=longLoss - (feePercent/2)*(amount/priceData)
          amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
          longStartIndex =longStartIndex+1
          isStartedLong = true
          isHalfLoss = false 
          isHalfLossPending = false
          longHalfPosition=0
        }else{
          
          longDifference = priceData - longCurPosition
          longDifferenceFromHalfPosition = priceData - longHalfPosition
          // console.log('priceData:',i,longDifference, priceData, "+",longCurPosition)
          //차이가 profitVolume이상이면 익절하고 longCurPositoin을 갱신(long다시 시작)

          if(!isHalfLoss){
            if(longDifference>=profitVolume){
              longProfit=longProfit+(longDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, amount)
              longProfitIndex1 = longProfitIndex1 +1
              isStartedLong = false
              amountTemp = amountTemp +(longDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
            }else{
              //차이가 2*restartVolume(-400)이하이면 절반손절
              if(longDifference<=2*restartVolume){
                longLoss=longLoss+(longDifference)*((amount/2)/priceData)- (feePercent/4)*(amount/priceData)
                amountTemp = amountTemp +(longDifference)*((amount/2)/priceData)- (feePercent/4)*(amount/priceData)
                longHalfPosition = longCurPosition
                isHalfLoss = true    
                isHalfLossPending = true
                console.log('longProfit===L1',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
                longLossIndex1 = longLossIndex1 +1
              }
            }
          }else{
            if(isHalfLossPending){
              //다시 올라와 차이가 restartVolume(-200)이상으로 줄어들면 끌어내리고 다시 longCurPosition 갱신
              if(longDifference>=restartVolume){
                longLoss1=longLoss1 - (feePercent/4)*(amount/priceData)
                amountTemp = amountTemp - (feePercent/4)*(amount/priceData)
                longCurPosition = longCurPosition + longDifference/2
                isHalfLoss = false 
                isHalfLossPending = false
                longHalfIndex1 = longHalfIndex1 +1
                console.log('longProfit===L2',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
              }else{
                //더 내려가 차이가 3*restartVolume2(-600)이하로 끌어내리고 longCurPosition 갱신
                if (longDifference<=3*restartVolume){
                  // isStartedLong = false
                  isHalfLoss = false
                  isHalfLossPending = false
                  longLoss2=longLoss2 - (feePercent/4)*(amount/priceData)
                  amountTemp = amountTemp - (feePercent/4)*(amount/priceData)
                  longCurPosition = longCurPosition + longDifference/2
                  console.log('longProfit===L3',i,longDifference,priceData,"-",longCurPosition,"=",longLoss, amount)
                  longLossIndex2 = longLossIndex2 +1
                }
              }
            }else{
              //다시 내려가 차이가 restartVolume/2(-100)이하으로 되면 다시 longCurPosition 없애기
              console.log("================")
              if(longDifference<=restartVolume/2){
                longLoss1=longLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp - (feePercent/2)*(amount/priceData)
                isHalfLossPending = true
                longHalfIndex2 = longHalfIndex2 +1
              }
              if(longDifference>=profitVolume){
                longProfit1=longProfit1+(longDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                // console.log('longProfit===P1',i,longDifference,priceData,"+",longCurPosition,"=",longProfit, amount)
                longProfitIndex2 = longProfitIndex2 +1
                amountTemp = amountTemp +(longDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                isStartedLong = false
              }
            }
            
            
          }


        }
      }


      if(shortEnable){
        if(!isStartedShort){
          shortStartPosition = priceData
          shortCurPosition = priceData
          shortLoss=shortLoss - (feePercent/2)*(amount/priceData)
          amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
          shortStartIndex =shortStartIndex +1
          isStartedShort = true
          isHalfShortLoss = false 
        }else{
          shortDifference = shortCurPosition -priceData 

          // console.log('priceData:',i,shortDifference, priceData, "+",shortCurPosition)
          //차이가 profitVolume이상이면 익절하고 shortCurPositoin을 갱신(short다시 시작)

          if(!isHalfShortLoss){
            if(shortDifference>=profitVolume){
              shortProfit=shortProfit+(shortDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              amountTemp = amountTemp+(shortDifference)*(amount/priceData) - (feePercent/2)*(amount/priceData)
              // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, amount)
              shortProfitIndex1 = shortProfitIndex1 +1
              isStartedShort = false
            }else{
              //차이가 2*restartVolume(400)이하이면 손절
              if(shortDifference<=2*restartVolume){
                shortLoss=shortLoss+(shortDifference)*((amount/2)/priceData)- (feePercent/4)*(amount/priceData)
                amountTemp = amountTemp+(shortDifference)*((amount/2)/priceData)- (feePercent/4)*(amount/priceData)
                shortHalfPosition = shortCurPosition
                isHalfShortLoss = true    
                isHalfShortLossPending = true
                // console.log('shortProfit===L3',i,shortDifference,priceData,"-",shortCurPosition,"=",shortLoss, amount)
                shortLossIndex1 = shortLossIndex1 +1
              }
            }
          }else{
            if(isHalfShortLossPending){
              //다시 올라와 차이가 restartVolume이상으로 줄어들면 끌어올리고 다시 shortCurPosition 갱신
              if(shortDifference>=restartVolume){
                shortLoss1=shortLoss1 - (feePercent/4)*(amount/priceData)
                amountTemp = amountTemp- (feePercent/4)*(amount/priceData)
                shortCurPosition = shortCurPosition- shortDifference/2
                isHalfShortLoss = false
                isHalfShortLossPending = false
                shortHalfIndex1 = shortHalfIndex1 +1
              }else{
                //더 내려가 차이가 3*restartVolume2이하로 되면 끌어올리고 다시 shortCurPosition 갱신
                if (shortDifference<=3*restartVolume){
                  // isStartedShort = false
                  isHalfShortLoss = false
                  isHalfShortLossPending = false
                  shortLoss2=shortLoss2 - (feePercent/4)*(amount/priceData)
                  amountTemp = amountTemp- (feePercent/4)*(amount/priceData)
                  shortCurPosition = shortCurPosition- shortDifference/2
                  // console.log('shortProfit===4',i,shortDifference, priceData,"+",shortCurPosition.toFixed(0))
                  shortLossIndex2 = shortLossIndex2 +1
                }
              }
            }else{
              if(shortDifference<=restartVolume/2){
                shortLoss1=shortLoss1 - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp- (feePercent/2)*(amount/priceData)
                isHalfShortLossPending = true
                shortHalfIndex2 = shortHalfIndex2 +1
              }
              if(shortDifference>=profitVolume){
                shortProfit1=shortProfit1+(shortDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                amountTemp = amountTemp+(shortDifference-restartVolume/2)*(amount/priceData) - (feePercent/2)*(amount/priceData)
                // console.log('shortProfit===P1',i,shortDifference,priceData,"+",shortCurPosition,"=",shortProfit, amount)
                shortProfitIndex2 = shortProfitIndex2 +1
                isStartedShort = false
              }
            }
            
            
          }


        }
      }

         
      dayTotal=(
        longProfit+
        longProfit1+
        longLoss+
        longLoss1+
        longLoss2+
        shortProfit+
        shortProfit1+
        shortLoss+
        shortLoss1+
        shortLoss2
        )      
      dayLongTotal=(longProfit+longProfit1+longLoss+longLoss1+longLoss2)
      dayShortTotal=(shortProfit+shortProfit1+shortLoss+shortLoss1+shortLoss2)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        dayTotalArray.push(dayTotal.toFixed(0))
        dayLongTotalArray.push(dayLongTotal.toFixed(0))
        dayShortTotalArray.push(dayShortTotal.toFixed(0))
      }
      let seriesTmp=[
        { name: "Total", data: dayTotalArray},
        { name: "Long", data: dayLongTotalArray},
        { name: "Short", data: dayShortTotalArray},
      ]
      setSeries(seriesTmp)
      i = i + 1
    }
    console.log("amountTemp===",amountTemp)
    console.log('longProfit=====',unitAmount,longProfit.toFixed(0), longLoss.toFixed(0),(longProfit+ longLoss).toFixed(0), )
    console.log('shortProfit=====',unitAmount,shortProfit.toFixed(0), shortLoss.toFixed(0),(shortProfit+shortLoss).toFixed(0))
    console.log('longProfit:',longProfit.toFixed(0), longProfit1.toFixed(0), )
    console.log('longLoss:',longLoss.toFixed(0),longLoss1.toFixed(0),longLoss2.toFixed(0), )
    console.log('shortProfit:',shortProfit.toFixed(0), shortProfit1.toFixed(0) )
    console.log('shortLoss:',shortLoss.toFixed(0),shortLoss1.toFixed(0), shortLoss2.toFixed(0))
    console.log('longProfitIndex:', longProfitIndex1, longProfitIndex2)
    console.log('longLossIndex1:',longLossIndex1, )
    console.log('longLossIndex2:',longLossIndex2, longHalfIndex1, longHalfIndex2)
    console.log('shortProfitIndex:', shortProfitIndex1, shortProfitIndex2)
    console.log('shortLossIndex1:',shortLossIndex1, )
    console.log('shortLossIndex2:',shortLossIndex2, shortHalfIndex1, shortHalfIndex2)
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
    if(startPoint<endPoint){
      let daysTmp=days1[0].slice(startPoint,endPoint)
      daysTmp=[daysTmp]
      setDays(daysTmp)
    }
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
          onClick={calcAlgorithm4}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc 4'}
        </Button>
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={calcAlgorithm3}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc 3'}
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
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={calcAlgorithm1}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc 1'}
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
                  {/* Amount Number */}
                  Percent
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

