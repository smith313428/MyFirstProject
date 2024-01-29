import React, {  Fragment ,useEffect,useState,useMemo} from "react";
import { Row, Button, Card, CardBody, Table,Input, Label } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import { DateRangePicker } from 'react-date-range';
import moment from "moment";
import ReactExport from "react-export-excel";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import Select from "react-select";

import {data_22_9_17, data_22_9_16, data_22_6_20,data_21_6_1_22_7_30,
  data_22_09_29_1m, 
  data_22_09_29_15m, 
  data_22_09_30_1m, 
  data_22_09_30_15m, 
  data_22_10_01_1m, 
  data_22_10_01_15m, 
  data_22_10_02_1m, 
  data_22_10_02_15m, 

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


const daysData_21_01_12_10_t = daysData_21_01_t.concat(daysData_21_02_t).concat(daysData_21_03_t).concat(daysData_21_04_t).concat(daysData_21_05_t).concat(daysData_21_06_t).concat(daysData_21_07_t).concat(daysData_21_08_t).concat(daysData_21_09_t).concat(daysData_21_10_t).concat(daysData_21_11_t).concat(daysData_21_12_t).concat(daysData_22_01_t).concat(daysData_22_02_t).concat(daysData_22_03_t).concat(daysData_22_04_t).concat(daysData_22_05_t).concat(daysData_22_06_t).concat(daysData_22_07_t).concat(daysData_22_08_t).concat(daysData_22_09_t).concat(daysData_22_10_t)


const daysData_21_01_12_10_m = [daysData_21_01_12_10_t]

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
  // 20000,20400,19600,20000,
  30000, 37000,32000, 45000, 40000, 44000, 32000,42000, 38000, 40000, 30000, 35000,
// 30000, 41000, 34000,40000, 42000, 50000, 65000, 50000, 55000, 48000,55000,50000,
// 68000,58000,65000,53000,70000,65000,75000,42000,60000,52000,60000,65000,50000,
// 61000,59000,65000,59000,65000,49000,55000,45000,50000,25000,40000,32000,41000,
// 35000,40000,31000,40000,37000,42000,30000,35000,30000,36000,35000,36000,30000,
]]
const sampleData2=[[
  // 20000,20800,20000,
  // 20000, 21000,20000,19000, 20000,
  // 20000, 19000,20000, 21000,20000,
  // 19000, 21000,19000, 
  // 20000, 21000,20000,19000, 20000,
  // 20000, 19000,20000, 21000,19000,
]]
// const sampleData=[[
// 20000,
// 19900,
// 19800,
// 19700,
// 19600,
// 19500,
// 19400,
// 19300,
// 19200,
// 19100,
// 19000,
// 18900,
// 18800,
// 18700,
// 18600,
// 18500,
// 18400,
// 18300,
// 18200,
// 18100,
// 18000,
// 17900,
// 17800,
// 17700,
// 17600,
// 17500,
// 17400,
// 17300,
// 17200,
// 17100,
// 17000,
// 16900,
// 16800,
// 16700,
// 16600,
// 16500,
// 16400,
// 16300,
// 16200,
// 16100,
// 16000,
// 15900,
// 15800,
// 15700,
// 15600,
// 15500,
// 15400,
// 15300,
// 15200,
// 15100,
// 15000,

// 15000,
// 15100,
// 15200,
// 15300,
// 15400,
// 15500,
// 15600,
// 15700,
// 15800,
// 15900,
// 16000,
// 16100,
// 16200,
// 16300,
// 16400,
// 16500,
// 16600,
// 16700,
// 16800,
// 16900,
// 17000,
// 17100,
// 17200,
// 17300,
// 17400,
// 17500,
// 17600,
// 17700,
// 17800,
// 17900,
// 18000,
// 18100,
// 18200,
// 18300,
// 18400,
// 18500,
// 18600,
// 18700,
// 18800,
// 18900,
// 19000,
// 19100,
// 19200,
// 19300,
// 19400,
// 19500,
// 19600,
// 19700,
// 19800,
// 19900,
// 20000,]
// ]
// const sampleData=[data_21_04_18_5m]
// const sampleData1=[[
//   200000,
// ]]
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

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const Algorithm = (props) => {
  const [startDate, setStartDate] = useState(30)
  const [endDate, setEndDate] = useState(60)
  const [amount, setAmount] = useState(0)
  const [accountAmount, setAccountAmount] = useState(10000)
  const [lastPosition, setLastPosition] = useState(0)
  const [realPrice, setRealPrice] = useState(0)
  const [profitVolume, setProfitVolume] = useState(100)
  const [longPriceVolume, setLongPriceVolume] = useState(100)
  const [amountNumber, setAmountNumber] = useState(60)
  const [unitAmount, setUnitAmount] = useState(1000)
  const [unitAmount2, setUnitAmount2] = useState(250)
  const [profit, setProfit] = useState(0)
  const [loss, setLoss] = useState(0)
  const [daysSample, setDaysSample] = useState(sampleData)
  const [days, setDays] = useState(daysData_21_01_12_10_m) //daysData_22_07_m
  const [days1, setDays1] = useState(daysData_21_01_12_10_m) //daysData_22_07_m
  const [results, setResults] = useState()
  const [algorothm5StopLEength, setAlgorothm5StopLEength] = useState(0)
  const [exportData, setExportData] = useState([]);
  const [period, setPeriod] = useState(hourPeriod[0]);
  const [newDays, setNewDays] = useState(3);

  const [priceDataBtc, setPriceData] = useState(dataTemp)
  const [priceVolume, setPriceVolume] = useState(100)
  const [stopProfitVolume, setStopProfitVolume] = useState(500)
  const [priceVolume2, setPriceVolume2] = useState(300)
  const [lossLimit, setlossLimit] = useState(20000)
  const [selectionRange, setSelectionRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'range',
  }])
  useEffect(() => {
    let exportDataObj={}
    let exportData=[]
    let month=0
    let preMonth=0
    let newDays=[]
    let newDaysTmp=[]
    days[0].map((item, idx) => {
      let periodOfHour=period.value
      if((idx%periodOfHour)==0){
        newDaysTmp.push(item)
      }
    })
    newDays.push(newDaysTmp)
    console.log('newDays:',newDays)
    console.log('days:',days[0])
    setNewDays(newDays)
    let periodN=(24*(60/(5*period.value))).toFixed(0)
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
    console.log('exportData:',exportData)
  }, [days, period]);
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
  const handleOption=(e)=>{
    setPeriod(e)
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
        // result=Algorithm4(days[i],i+1,calcLongEnable,calcshortEnable)
        if (mode==4){
          result=Algorithm4(days[i],i+1,true,true)
        }else if(mode==5){
          result=Algorithm7(sampleData1[i],i+1,true,true)
        }else  if(mode==6){
          result=Algorithm6(newDays[i],i+1,true,true)
        }else if(mode==8){
          result=Algorithm6_S(newDays[i],i+1,true,true)
        }else  if(mode==9){ 
          result=Algorithm6_L(newDays[i],i+1,true,true)
        }else{

        }
        resultsTmp.push(result)
        resultsTmp.map((item ,idx)=>{
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
  const shortAlgorithm=()=>{
    let volume=0
    let curPosition=0
    let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    // let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let lossTmp=0
    let stopPositions=[]
    let stopAmounts=[]
    let deleteIdxs=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume>=priceVolume*(positionsTmp.length)){
          curPosition=curPosition+((priceData[timeIdx]-curPosition)*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
        // totalProfits.push(profitTmp.toFixed(0))
        // stopPositions.push(curPosition.toFixed(0))
        // stopAmounts.push(amountTmp)
        // amountTmp=0
        // profitTmp=0
        // positionsTmp=[]
        // console.log('stopPositions_1',stopPositions,stopAmounts,totalProfits)
      }
      console.log('num, realValue, volume,curPosition,amount...positionsTmp.length',i,priceData[timeIdx],volume,curPosition,amountTmp,positionsTmp.length)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = positionsTmp[positionsTmp.length-i]-priceData[timeIdx]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(curPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - curPosition)*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=(priceData[timeIdx] - curPosition)*((amountTmp)/priceData[timeIdx])

    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits)
    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])

  }
  
  const longAlgorithm=()=>{
    let volume=0
    let curPosition=0
    let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    // let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let lossTmp=0
    let deleteIdxs=[] 
    let stopPositions=[]
    let stopAmounts=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
        let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume<=-priceVolume*(positionsTmp.length)){
          curPosition=curPosition-((curPosition-priceData[timeIdx])*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
        // totalProfits.push(profitTmp.toFixed(0))
        // stopPositions.push(curPosition.toFixed(0))
        // stopAmounts.push(amountTmp)
        // amountTmp=0
        // profitTmp=0
        // positionsTmp=[]
        // console.log('stopPositions_1',stopPositions,stopAmounts,totalProfits)
      }
      console.log('num, realValue, volume,curPosition,amount...',i,priceData[timeIdx],volume,curPosition,amountTmp)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = priceData[timeIdx] -positionsTmp[positionsTmp.length-i]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(priceData[timeIdx]-curPosition)*(unitAmount/priceData[timeIdx])
          if(curPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=((curPosition-priceData[timeIdx])*((amountTmp)/priceData[timeIdx]))
    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits)

    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])
  }
  const shortAlgorithm2=()=>{
    let volume=0
    let curPosition=0
    let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    // let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let lossTmp=0
    let stopPositions=[]
    let stopAmounts=[]
    let deleteIdxs=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume>=priceVolume*(positionsTmp.length)){
          curPosition=curPosition+((priceData[timeIdx]-curPosition)*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
        totalProfits.push(profitTmp.toFixed(0))
        stopPositions.push(curPosition.toFixed(0))
        stopAmounts.push(amountTmp)
        amountTmp=0
        profitTmp=0
        positionsTmp=[]
        console.log('stopPositions_1',stopPositions,stopAmounts,totalProfits)
      }
      console.log('num, realValue, volume,curPosition,amount...positionsTmp.length',i,priceData[timeIdx],volume,curPosition,amountTmp,positionsTmp.length)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = positionsTmp[positionsTmp.length-i]-priceData[timeIdx]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(curPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - curPosition)*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=(priceData[timeIdx] - curPosition)*((amountTmp)/priceData[timeIdx])

    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits)
    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])

  }
  const longAlgorithm2=()=>{
    let volume=0
    let curPosition=0
    let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    // let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let profitTmp2=0
    let lossTmp=0
    let deleteIdxs=[] 
    let stopPositions=[]
    let stopAmounts=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
        let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume<=-priceVolume*(positionsTmp.length)){
          curPosition=curPosition-((curPosition-priceData[timeIdx])*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
        totalProfits.push(profitTmp.toFixed(0))
        profitTmp2=profitTmp2+profitTmp
        stopPositions.push(curPosition.toFixed(0))
        stopAmounts.push(amountTmp)
        amountTmp=0
        profitTmp=0
        positionsTmp=[]
        console.log('stopPositions_1',stopPositions,stopAmounts,totalProfits)
      }
      console.log('num, realValue, volume,curPosition,amount...',i,priceData[timeIdx],volume,curPosition,amountTmp)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = priceData[timeIdx] -positionsTmp[positionsTmp.length-i]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(priceData[timeIdx]-curPosition)*(unitAmount/priceData[timeIdx])
          if(curPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=((curPosition-priceData[timeIdx])*((amountTmp)/priceData[timeIdx]))
    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits,profitTmp2)

    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])
  }
  const shortAlgorithm3=()=>{
    let volume=0
    let curPosition=0
    let priceData=dayData
    // let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let lossTmp=0
    let stopPositions=[]
    let stopAmounts=[]
    let deleteIdxs=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume>=priceVolume*(positionsTmp.length)){
          curPosition=curPosition+((priceData[timeIdx]-curPosition)*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
        // totalProfits.push(profitTmp.toFixed(0))
        // stopPositions.push(curPosition.toFixed(0))
        // stopAmounts.push(amountTmp)
        // amountTmp=0
        // profitTmp=0
        // positionsTmp=[]
        // console.log('stopPositions_1',stopPositions,stopAmounts,totalProfits)
      }
      console.log('num, realValue, volume,curPosition,amount...positionsTmp.length',i,priceData[timeIdx],volume,curPosition,amountTmp,positionsTmp.length)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = positionsTmp[positionsTmp.length-i]-priceData[timeIdx]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(curPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - curPosition)*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=(priceData[timeIdx] - curPosition)*((amountTmp)/priceData[timeIdx])

    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits)
    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])

  }
  const longAlgorithm3=()=>{
    let volume=0
    let curPosition=0
    // let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    let priceData=dayData
    let startPosition=0
    let positionsTmp=[]
    let amountTmp=0
    let profitTmp=0
    let lossTmp=0
    let deleteIdxs=[] 
    let stopPositions=[]
    let stopAmounts=[]
    let totalProfits=[]
    let curLossTmp=0
    console.log('startDate:',startDate)
    console.log('endDate:',endDate)
    console.log('priceData:',priceData)
    for (let i = 0; i <= priceData.length-2; i++) {
    // for (let i = 0; i <= dayData.length-2; i++) {
        let timeIdx=i+1
      let startTimeIdx=i
      if(amountTmp==0){
        startPosition=priceData[startTimeIdx]
        curPosition=priceData[startTimeIdx]
        amountTmp=unitAmount
        positionsTmp.push(startPosition)
      }
      volume=priceData[timeIdx]-startPosition
      if(positionsTmp.length<amountNumber){
        if(volume<=-priceVolume*(positionsTmp.length)){
          curPosition=curPosition-((curPosition-priceData[timeIdx])*(unitAmount/(amountTmp+unitAmount)))
          positionsTmp.push(priceData[timeIdx])
          amountTmp=amountTmp+unitAmount
        }
      }
      else{
      }
      console.log('num, realValue, volume,curPosition,amount...',i,priceData[timeIdx],volume,curPosition,amountTmp)
      let difference = 0
      for (let i =1; i <= positionsTmp.length; i++) {
        difference = priceData[timeIdx] -positionsTmp[positionsTmp.length-i]
        if(difference>=profitVolume){
          deleteIdxs.push(positionsTmp.length-i)
          profitTmp=profitTmp+(priceData[timeIdx]-curPosition)*(unitAmount/priceData[timeIdx])
          if(curPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((curPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx]))
          }
          console.log('curPosition:, real,difference,profit',curPosition,priceData[timeIdx],difference,profitTmp)
          amountTmp=amountTmp-unitAmount
        }
      }
      deleteIdxs.map((item,idx)=>{
        positionsTmp.splice(item, 1)
      })
      deleteIdxs=[]
      curLossTmp=((curPosition-priceData[timeIdx])*((amountTmp)/priceData[timeIdx]))
    }
    console.log('curLossTmp:',curLossTmp)
    console.log('curPosition:',curPosition)
    console.log('positionsTmp:',positionsTmp)
    console.log('amountTmp:',amountTmp)
    console.log('profitTmp:',profitTmp)
    console.log('lossTmp:',lossTmp)
    console.log('stopPositions',stopPositions,stopAmounts,totalProfits)

    setProfit(profitTmp)
    setLoss(curLossTmp)
    setLastPosition(curPosition)
    setAmount(amountTmp)
    setRealPrice(priceData[priceData.length-1])    
  }
  const Algorithm4=(dayData,id,long,short)=>{
    let longVolume=0
    let longCurPosition=0
    // let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    let priceData=dayData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
    let longDeleteIdxs=[] 
    let longCurLossTmp=0
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
    let shortLossTmp=0
    let shortDeleteIdxs=[]
    let shortCurLossTmp=0
    let dayTotal=0
    let dayTotalArray=[]
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
        // console.log('accountAmountTmp:',accountAmountTmp)
        if(longVolume<=-priceVolume*(longPositionsTmp.length)){
          longCurPosition=longCurPosition-((longCurPosition-priceData[timeIdx])*(unitAmount/(longAmountTmp+unitAmount)))
          longPositionsTmp.push(priceData[timeIdx])
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
      // console.log('longNum, realValue, volume,curPosition,amount...',i,priceData[timeIdx],longVolume,longCurPosition,longAmountTmp)
      longDifference = 0
      for (let j =1; j <= longPositionsTmp.length; j++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-j)
          longProfitTmp=longProfitTmp+(priceData[timeIdx]-longCurPosition)*(unitAmount/longCurPosition)
          if(longCurPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/longCurPosition))
          }
          // accountAmountTmp=(accountAmount+Number(longProfitTmp)).toFixed(0)
          // console.log('longCurPosition:, real,longDifference,longProfit',longCurPosition,priceData[timeIdx],longDifference,longProfitTmp)
          longAmountTmp=longAmountTmp-unitAmount
        }
      }
      longDeleteIdxs.map((item,idx)=>{
        longPositionsTmp.splice(item, 1)
      })
      longDeleteIdxs=[]
      longCurLossTmp=((longCurPosition-priceData[timeIdx])*((longAmountTmp)/longCurPosition))
      if(longCurLossTmp>lossLimit){
        // console.log('longNum, realValue, volume,curPosition,amount, longCurLossTmp...',i,priceData[timeIdx],longVolume,longCurPosition,longAmountTmp,longCurLossTmp)
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
          shortAmountTmp=shortAmountTmp+unitAmount
        }
      }
      else{
      }
      // console.log('shortNum, realValue, volume,shortCurPosition,amount...positionsTmp.length',i,priceData[timeIdx],shortVolume,shortCurPosition,shortAmountTmp,shortPositionsTmp.length)
      shortDifference = 0
      for (let i =1; i <= shortPositionsTmp.length; i++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-i]-priceData[timeIdx]
        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-i)
          shortProfitTmp=shortProfitTmp+(shortCurPosition-priceData[timeIdx])*(unitAmount/shortCurPosition)
          if(shortCurPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/shortCurPosition))
          }
          // console.log('curPosition:, real,shortDifference,shortProfit',shortCurPosition,priceData[timeIdx],shortDifference,shortProfitTmp)
          shortAmountTmp=shortAmountTmp-unitAmount
          // accountAmountTmp=(accountAmount+Number(shortProfitTmp)).toFixed(0)
          // setAccountAmount(accountAmountTmp)
        }
      }
      shortDeleteIdxs.map((item,idx)=>{
        shortPositionsTmp.splice(item, 1)
      })
      shortDeleteIdxs=[]
      shortCurLossTmp=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/shortCurPosition)
      accountAmountTmp=accountAmount+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount)
      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      if(((i+2)%288)==0){
        dayTotalArray.push(dayTotal.toFixed(0))
      }
    }
    let result={}
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
    console.log('exportData:',exportData)
    setExportData(exportData)
    console.log('accountAmountTmp:',accountAmount,accountAmountTmp)
    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
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
    // console.log('result:',result)
    // console.log('results:',results)
    return result
    // let resultsTmp=JSON.parse(JSON.stringify(results))
    // resultsTmp.push(result)
    // console.log('resultsTmp:',resultsTmp)
    // setResults(resultsTmp)
    
  }
  const Algorithm5=(dayData,id,long,short)=>{
    let longVolume=0
    let longCurPosition=0
    // let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    let priceData=dayData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
    let longDeleteIdxs=[] 
    let longCurLossTmp=0
    let realPriceMax=0
    let realPriceMin=80000
    let longCurPositionTemp=0
    let longStopCurPositions=[]
    let longDeleteStopIdxs=[]

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
    let shortDeleteIdxs=[]
    let shortCurLossTmp=0
    let shortLossTmp=0
    let shortStopCurPositions=[]
    let shortCurPositionTemp=0
    let shortDeleteStopIdxs=[]
    let longStopProfit=0
    let shortStopProfit=0
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
        if(longVolume<=-priceVolume*(longPositionsTmp.length)){
          longCurPosition=longCurPosition-((longCurPosition-priceData[timeIdx])*(unitAmount/(longAmountTmp+unitAmount)))
          longPositionsTmp.push(priceData[timeIdx])
          longAmountTmp=longAmountTmp+unitAmount
        }
      }
      else{
        if(longStopCurPositions.length<algorothm5StopLEength){
          let longStopCurPositionsObj={
            'curPosition':longCurPosition,
            'amount':longAmountTmp
          }
          console.log('longStopCurPositionsObj:',longStopCurPositionsObj)
          longStopCurPositions.push(longStopCurPositionsObj)
          longPositionsTmp=[]
          console.log('longStopCurPositions_1:',longStopCurPositions)
          longAmountTmp=0
        }
        
      }
      longDeleteStopIdxs=[]
      longStopCurPositions.map((item,idx)=>{
        if(priceData[timeIdx]-item.curPosition>stopProfitVolume){
          longDeleteStopIdxs.push(idx)
          longStopProfit=longStopProfit+(stopProfitVolume)*(item.amount/item.curPosition)
          console.log('data_long:',item,idx,priceData[timeIdx],longStopProfit)
        }
      })
      longDeleteStopIdxs.map((item,idx)=>{
        // console.log('longDeleteStopIdxs:',item)
        longStopCurPositions.splice(item, 1)
        console.log('longStopCurPositions_2:',longStopCurPositions)
      })
      
      if (realPriceMax<priceData[timeIdx]){
        realPriceMax=priceData[timeIdx]
      }
      if (realPriceMin>priceData[timeIdx]){
        realPriceMin=priceData[timeIdx]
      }
      // console.log('longNum, realValue, volume,curPosition,amount...',i,priceData[timeIdx],volume,curPosition,longAmountTmp)
      longDifference = 0
      for (let i =1; i <= longPositionsTmp.length; i++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-i]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-i)
          longProfitTmp=longProfitTmp+(priceData[timeIdx]-longCurPosition)*(unitAmount/longCurPosition)
          if(longCurPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/longCurPosition))
          }
          // accountAmountTmp=(accountAmount+Number(longProfitTmp)).toFixed(0)
          // console.log('longCurPosition:, real,longDifference,longProfit',longCurPosition,priceData[timeIdx],difference,longProfitTmp)
          longAmountTmp=longAmountTmp-unitAmount
        }
      }
      longDeleteIdxs.map((item,idx)=>{
        longPositionsTmp.splice(item, 1)
      })
      longDeleteIdxs=[]
      longCurLossTmp=0
      let longCurLossTmp1=((longCurPosition-priceData[timeIdx])*((longAmountTmp)/longCurPosition))
      longStopCurPositions.map((item,idx)=>{
        longCurLossTmp=longCurLossTmp+((item.curPosition-priceData[timeIdx])*((item.amount)/item.curPosition))
      })
      longCurLossTmp=longCurLossTmp+longCurLossTmp1


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
          shortAmountTmp=shortAmountTmp+unitAmount
        }
      }
      else{
        if(shortStopCurPositions.length<algorothm5StopLEength){
          let shortStopCurPositionsObj={
            'curPosition':shortCurPosition,
            'amount':shortAmountTmp
          }
          shortStopCurPositions.push(shortStopCurPositionsObj)
          shortPositionsTmp=[]
          console.log('shortStopCurPositions:',shortStopCurPositions)
          shortAmountTmp=0
        }
      }
      shortDeleteStopIdxs=[]
      shortStopCurPositions.map((item,idx)=>{
        if(item.curPosition-priceData[timeIdx]>stopProfitVolume){
          shortDeleteStopIdxs.push(idx)
          console.log('data_short:',item,idx,priceData[timeIdx])
          shortStopProfit=shortStopProfit+(stopProfitVolume)*(item.amount/item.curPosition)
        }
      })
      shortDeleteStopIdxs.map((item,idx)=>{
        console.log('shortDeleteStopIdxs:',item)
        shortStopCurPositions.splice(item, 1)
        console.log('shortStopCurPositions_2:',shortStopCurPositions)
      })
      // console.log('shortNum, realValue, volume,shortCurPosition,amount...positionsTmp.length',i,priceData[timeIdx],volume,shortCurPosition,amountTmp,positionsTmp.length)
      shortDifference = 0
      for (let i =1; i <= shortPositionsTmp.length; i++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-i]-priceData[timeIdx]
        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-i)
          shortProfitTmp=shortProfitTmp+(shortCurPosition-priceData[timeIdx])*(unitAmount/shortCurPosition)
          if(shortCurPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/shortCurPosition))
          }
          // console.log('curPosition:, real,shortDifference,shortProfit',shortCurPosition,priceData[timeIdx],difference,shortProfitTmp)
          shortAmountTmp=shortAmountTmp-unitAmount
          // accountAmountTmp=(accountAmount+Number(shortProfitTmp)).toFixed(0)
        }
      }
      shortDeleteIdxs.map((item,idx)=>{
        shortPositionsTmp.splice(item, 1)
      })
      shortDeleteIdxs=[]
      let shortCurLossTmp1=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/shortCurPosition)
      shortCurLossTmp=0
      shortStopCurPositions.map((item,idx)=>{
        shortCurLossTmp=shortCurLossTmp+((priceData[timeIdx]-item.curPosition)*((item.amount)/item.curPosition))
      })
      shortCurLossTmp =shortCurLossTmp+shortCurLossTmp1
    }
    console.log('longStopProfit:',longStopProfit)
    console.log('shortStopProfit:',shortStopProfit)
    let result={}
    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
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
    // console.log('result:',result)
    // console.log('results:',results)
    return result
    // let resultsTmp=JSON.parse(JSON.stringify(results))
    // resultsTmp.push(result)
    // console.log('resultsTmp:',resultsTmp)
    // setResults(resultsTmp)
  }
  const Algorithm6=(dayData,id,long,short)=>{
    console.log('dayData:',dayData)
    console.log('days:',days)
    let longVolume=0
    let longCurPosition=0
    let priceData=dayData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
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
          // console.log('longPositionsTmp:',i,longPositionsTmp.length)
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
      // console.log('longNum, realValue,curPosition,longVolume,amount...',i,(i/288).toFixed(0),priceData[timeIdx],longCurPosition,longVolume,longAmountTmp)
      longDifference = 0
      for (let j =1; j <= longPositionsTmp.length; j++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-j)
          let longProfitTmpPre=longProfitTmp
          longProfitTmp=longProfitTmp+(priceData[timeIdx]-longCurPosition)*(unitAmount/priceData[timeIdx])
          if(longCurPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx]))
          }
          if(liPre!==i){
            // console.log('longProfitTmp:',i,longProfitTmp.toFixed(0),(longProfitTmp-longProfitTmpPre).toFixed(0))
          }
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
        // console.log('longProfitTm_p_____:',i,longProfitTmp.toFixed(0),longCurLossTmp.toFixed(0),longPositionsTmp.length)
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
      // console.log('shortNum, realValue, shortCurPosition,amount...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp)
      shortDifference = 0
      for (let j =1; j <= shortPositionsTmp.length; j++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-j]-priceData[timeIdx]
        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-j)
          let shortProfitTmpPre=shortProfitTmp
          shortProfitTmp=shortProfitTmp+(shortCurPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(shortCurPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/priceData[timeIdx]))
          }
          if(siPre!=i){
            // console.log('shortProfitTmp:',i,shortProfitTmp.toFixed(0),(shortProfitTmp-shortProfitTmpPre).toFixed(0),shortCurPosition,priceData[timeIdx],shortAmountTmp)
          }
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
        // console.log('shortProfitTm_p_______:',i,shortProfitTmp.toFixed(0),shortCurLossTmp.toFixed(0),shortPositionsTmp.length)
        shortAmountTmp=0
        shortCurLossTmp=0
        shortPositionsTmp=[]
      }
      accountAmountTmp=(accountAmount*2/3+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount))*1.5
      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        shortCurLossTmpArray.push(-shortCurLossTmp.toFixed(0))
        shortProfitTmpArray.push(shortProfitTmp.toFixed(0))
        longCurLossTmpArray.push(-longCurLossTmp.toFixed(0))
        longProfitTmpArray.push(longProfitTmp.toFixed(0))
        dayTotalArray.push(dayTotal.toFixed(0))
      }
    }
    let result={}
    console.log('shortCurLossTmpArray:',shortCurLossTmpArray)
    console.log('shortProfitTmpArray:',shortProfitTmpArray)
    console.log('longCurLossTmpArray:',longCurLossTmpArray)
    console.log('longProfitTmpArray:',longProfitTmpArray)
    console.log('dayTotalArray:',dayTotalArray)
    console.log('accountAmountTmp:',accountAmountTmp)
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
    console.log('exportData:',exportData)
    setExportData(exportData)

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
  const Algorithm6_L=(dayData,id,long,short)=>{
    console.log('dayData:',dayData)
    console.log('days:',days)
    let longVolume=0
    let longCurPosition=0
    let priceData=dayData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
    let longDeleteIdxs=[] 
    let longCurLossTmp=0
    let longProfitTmpArray=[]
    let longCurLossTmpArray=[]
    let realPriceMax=0
    let realPriceMin=80000
    let longCurPositionTemp=0
    let accountAmountTmp=accountAmount
    let longDifference=0
    let longRealPrice=priceData[priceData.length-1]
    let shortCurPosition=0
    let shortAmountTmp=0
    let shortProfitTmp=0
    let shortProfitTmpArray=[]
    let shortCurLossTmp=0
    let dayTotal=0
    let shortCurLossTmpArray=[]
    let dayTotalArray=[]
    for (let i = 0; i <= priceData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
      if(longAmountTmp==0){
        // console.log('longAmountTmp=0',i,priceData[startTimeIdx])
        longStartPosition=priceData[startTimeIdx]
        longCurPosition=priceData[startTimeIdx]
        longAmountTmp=unitAmount
        longPositionsTmp.push(longStartPosition)
      }
      longVolume=priceData[timeIdx]-longStartPosition
      if(unitAmount*longPositionsTmp.length<accountAmount){
        // console.log('accountAmountTmp:',accountAmount,accountAmountTmp)
        if(longVolume<=-longPriceVolume*(longPositionsTmp.length)){
          longCurPosition=longCurPosition-((longCurPosition-priceData[timeIdx])*(unitAmount/(longAmountTmp+unitAmount)))
          longPositionsTmp.push(priceData[timeIdx])
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
      // console.log('longNum, realValue,curPosition,longVolume,amount...',i,(i/288).toFixed(0),priceData[timeIdx],longCurPosition,longVolume,longAmountTmp)
      longDifference = 0
      for (let j =1; j <= longPositionsTmp.length; j++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-j)
          longProfitTmp=longProfitTmp+(priceData[timeIdx]-longCurPosition)*(unitAmount/priceData[timeIdx])
          if(longCurPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx]))
          }
          // console.log('longCurPosition:, real,longDifference,longProfit',i,(i/288).toFixed(0),longCurPosition,priceData[timeIdx],longDifference,longProfitTmp)
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
        // console.log('longProfitTm_p_____:',i,longProfitTmp.toFixed(0),longCurLossTmp.toFixed(0),longPositionsTmp.length)
        longAmountTmp=0
        longCurLossTmp=0
        longPositionsTmp=[]
      }
      accountAmountTmp=(accountAmount*2/3+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount))*1.5
      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        shortCurLossTmpArray.push(-shortCurLossTmp.toFixed(0))
        shortProfitTmpArray.push(shortProfitTmp.toFixed(0))
        longCurLossTmpArray.push(-longCurLossTmp.toFixed(0))
        longProfitTmpArray.push(longProfitTmp.toFixed(0))
        dayTotalArray.push(dayTotal.toFixed(0))
      }
    }
    let result={}
    console.log('shortCurLossTmpArray:',shortCurLossTmpArray)
    console.log('shortProfitTmpArray:',shortProfitTmpArray)
    console.log('longCurLossTmpArray:',longCurLossTmpArray)
    console.log('longProfitTmpArray:',longProfitTmpArray)
    console.log('dayTotalArray:',dayTotalArray)
    console.log('accountAmountTmp:',accountAmountTmp)
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
    console.log('exportData:',exportData)
    setExportData(exportData)

    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
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
  const Algorithm6_S=(dayData,id,long,short)=>{
    console.log('dayData:',dayData)
    console.log('days:',days)
    let longCurPosition=0
    let priceData=dayData
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
    let longCurLossTmp=0
    let longProfitTmpArray=[]
    let longCurLossTmpArray=[]
    let realPriceMax=0
    let realPriceMin=80000
    let accountAmountTmp=accountAmount
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
    let shortCurLossTmpArray=[]
    let dayTotalArray=[]
    for (let i = 0; i <= priceData.length-2; i++) {
      let timeIdx=i+1
      let startTimeIdx=i
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
          shortAmountTmp=shortAmountTmp+unitAmount
        }
      }
      else{
      }
      // console.log('shortNum, realValue, shortCurPosition,amount...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp)
      shortDifference = 0
      for (let j =1; j <= shortPositionsTmp.length; j++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-j]-priceData[timeIdx]
        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-j)
          shortProfitTmp=shortProfitTmp+(shortCurPosition-priceData[timeIdx])*(unitAmount/priceData[timeIdx])
          if(shortCurPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/priceData[timeIdx]))
          }
          // console.log('curPosition:, real,shortDifference,shortProfit',i,(i/288).toFixed(0),shortCurPosition,priceData[timeIdx],shortDifference,shortProfitTmp)
          shortAmountTmp=shortAmountTmp-unitAmount
        }
      }
      shortDeleteIdxs.map((item,idx)=>{
        shortPositionsTmp.splice(item, 1)
      })
      shortDeleteIdxs=[]
      shortCurLossTmp=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/priceData[timeIdx])
      if(shortCurLossTmp>lossLimit){
        // console.log('shortProfitTm_p_______:',i,shortProfitTmp.toFixed(0),shortCurLossTmp.toFixed(0),shortPositionsTmp.length)
        shortProfitTmp=shortProfitTmp-shortCurLossTmp
        shortAmountTmp=0
        shortCurLossTmp=0
        shortPositionsTmp=[]
      }
      accountAmountTmp=(accountAmount*2/3+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount))*1.5

      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      let periodN=(24*(60/(5*period.value))).toFixed(0)
      if(((i+2)%periodN)==0){
        shortCurLossTmpArray.push(-shortCurLossTmp.toFixed(0))
        shortProfitTmpArray.push(shortProfitTmp.toFixed(0))
        longCurLossTmpArray.push(-longCurLossTmp.toFixed(0))
        longProfitTmpArray.push(longProfitTmp.toFixed(0))
        dayTotalArray.push(dayTotal.toFixed(0))
      }
    }
    let result={}
    console.log('shortCurLossTmpArray:',shortCurLossTmpArray)
    console.log('shortProfitTmpArray:',shortProfitTmpArray)
    console.log('longCurLossTmpArray:',longCurLossTmpArray)
    console.log('longProfitTmpArray:',longProfitTmpArray)
    console.log('dayTotalArray:',dayTotalArray)
    console.log('accountAmountTmp:',accountAmountTmp)
    let exportDataObj={}
    let exportData=[]
    let periodHour=period.value
    dayTotalArray.map((item, idx) => {
      exportDataObj = {
        'id':idx,
        'value': item
      }
      exportData.push(exportDataObj)
      exportDataObj = {}
    })
    console.log('exportData:',exportData)
    setExportData(exportData)

    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
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
    // console.log('result:',result)
    // console.log('results:',results)
    return result
    // let resultsTmp=JSON.parse(JSON.stringify(results))
    // resultsTmp.push(result)
    // console.log('resultsTmp:',resultsTmp)
    // setResults(resultsTmp)
  }
  const Algorithm7=(dayData,id,long,short)=>{
    console.log('dayData:',dayData)
    let longVolume=0
    let longCurPosition=0
    // let priceData=dataTemp.slice(startDate*48,startDate*48+endDate)
    let priceData=dayData
    let longStartPosition=0
    let longPositionsTmp=[]
    let longAmountTmp=0
    let longProfitTmp=0
    let lossTmp=0
    let longDeleteIdxs=[] 
    let longCurLossTmp=0
    let longProfitTmpArray=[]
    let longCurLossTmpArray=[]
    let realPriceMax=0
    let realPriceMin=80000
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
    let shortCurLossTmpArray=[]
    let dayTotalArray=[]
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
      // console.log('unitAmount,',i,priceData[timeIdx],longVolume,priceVolume*(longPositionsTmp.length))
      // console.log('accountAmount,',unitAmount*longPositionsTmp.length,accountAmount)

      // console.log('longVolume,longStartPosition,real,longVolume,:',i,longVolume,longStartPosition,priceData[timeIdx],priceVolume*(longPositionsTmp.length))

      if(unitAmount*longPositionsTmp.length<accountAmount){
        if(longVolume<=-priceVolume*(longPositionsTmp.length)){
          let longNumber=-Math.trunc((longVolume+(priceVolume*(longPositionsTmp.length-1)))/priceVolume)
          let longPositionsTemp=[]
          // console.log('shortNumber_1:',i,longNumber,longVolume,priceData[timeIdx],longStartPosition)

          for (let k =1; k <= longNumber; k++) {
            // console.log('longNumber_1:',i,k)
            let longPositionsTmpObj={}
            longPositionsTmpObj=longPositionsTmp[longPositionsTmp.length-1]-priceVolume
            if(longPositionsTmp.length<amountNumber){
              longPositionsTmp.push(longPositionsTmpObj)
              // console.log('longCurPosition:',longCurPosition)
              longCurPosition=longCurPosition-((longCurPosition-longPositionsTmpObj)*(unitAmount/(longAmountTmp+unitAmount)))
              longAmountTmp=longAmountTmp+unitAmount
              longPositionsTemp= JSON.parse(JSON.stringify(longPositionsTmp))
              // console.log('longCurPosition:',longCurPosition,longPositionsTmpObj,unitAmount/(longAmountTmp+unitAmount))
            }
            else{
              longPositionsTmpObj=longPositionsTemp[longPositionsTemp.length-1]-priceVolume
              longPositionsTemp.push(longPositionsTmpObj)
              longCurLossTmp=((longCurPosition-longPositionsTmpObj)*((longAmountTmp)/longPositionsTmpObj))
              // console.log('k,longCurLossTmp, realValue, curPosition,amount...',k,longCurLossTmp,longPositionsTmpObj,longCurPosition,longAmountTmp)
              if(longCurLossTmp>lossLimit){
                longProfitTmp=longProfitTmp-longCurLossTmp
                longAmountTmp=unitAmount
                longPositionsTmp=[]
                longStartPosition=longPositionsTemp[longPositionsTemp.length-1]
                longCurPosition=longStartPosition
                longPositionsTmp.push(longPositionsTemp[longPositionsTemp.length-1])
                // console.log('longCurLossTmp,longStartPosition...',i,longCurLossTmp,longStartPosition)

              }
            }
          }
        }
        else{
          // console.log('longPositionsTmp:',i,longPositionsTmp)
          longDifference = 0
          // console.log('longPositionsTmp:',longPositionsTmp)
          for (let j =1; j <= longPositionsTmp.length; j++) {
            longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
            // console.log('longDifference,reaal',i,longDifference,priceData[timeIdx],longPositionsTmp[longPositionsTmp.length-j])
            if(longDifference>=profitVolume){
              longDeleteIdxs.push(longPositionsTmp.length-j)
              // longProfitTmp=longProfitTmp+(longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume)*(unitAmount/longCurPosition)
              longProfitTmp=longProfitTmp+(longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume)*(unitAmount/20000)
              if(longCurPosition>priceData[timeIdx]){
                lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/longCurPosition))
              }
              // console.log('real,longCurPosition:, longDifference,longProfit,longAmountTmp',i,longPositionsTmp[longPositionsTmp.length-j],longCurPosition,longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume,longProfitTmp,longAmountTmp)
              longAmountTmp=longAmountTmp-unitAmount
            }
          }
          longDeleteIdxs.map((item,idx)=>{
            longPositionsTmp.splice(item, 1)
          })
          longDeleteIdxs=[]
          let longNumber=Math.trunc((priceData[timeIdx]-longStartPosition-priceVolume)/priceVolume)
          // console.log('longStartPosition,real,longNumber:',longStartPosition,priceData[timeIdx],longNumber)
          for (let k =1; k <= longNumber; k++) {
            // console.log('longNumber:',i,k)
            longStartPosition=priceData[timeIdx]
            // longProfitTmp=longProfitTmp+(profitVolume)*(unitAmount/priceData[timeIdx])
            longProfitTmp=longProfitTmp+(profitVolume)*(unitAmount/20000)
            // console.log('real_2_0,longCurPosition:, longDifference,longProfit',i,priceData[timeIdx],longCurPosition,longDifference,longProfitTmp)
          }
        }
      }
      else{

      }
      longDifference = 0
      // console.log('longPositionsTmp:',longPositionsTmp,longCurPosition,longAmountTmp)
      for (let j =1; j <= longPositionsTmp.length; j++) {
        longDifference = priceData[timeIdx] -longPositionsTmp[longPositionsTmp.length-j]
        if(longDifference>=profitVolume){
          longDeleteIdxs.push(longPositionsTmp.length-j)
          // longProfitTmp=longProfitTmp+(longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume)*(unitAmount/longCurPosition)
          longProfitTmp=longProfitTmp+(longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume)*(unitAmount/20000)
          if(longCurPosition>priceData[timeIdx]){
            lossTmp=lossTmp+((longCurPosition-priceData[timeIdx])*(unitAmount/longCurPosition))
          }
          // console.log('real3,longCurPosition:, longDifference,longProfit,longAmountTmp',i,longPositionsTmp[longPositionsTmp.length-j],longCurPosition,longPositionsTmp[longPositionsTmp.length-j]-longCurPosition+profitVolume,longProfitTmp,longAmountTmp)
          longAmountTmp=longAmountTmp-unitAmount
        }
      }
      longDeleteIdxs.map((item,idx)=>{
        longPositionsTmp.splice(item, 1)
      })
      longDeleteIdxs=[]
      let longNumber=Math.trunc((priceData[timeIdx]-longStartPosition-priceVolume)/priceVolume)
      // console.log('longStartPosition,real,longNumber:',longStartPosition,priceData[timeIdx],longNumber)
      for (let k =1; k <= longNumber; k++) {
        // console.log('longNumber:',i,k)
        longStartPosition=priceData[timeIdx]
        // longProfitTmp=longProfitTmp+(profitVolume)*(unitAmount/priceData[timeIdx])
        longProfitTmp=longProfitTmp+(profitVolume)*(unitAmount/20000)
        // console.log('real_2,longCurPosition:, longDifference,longProfit',i,priceData[timeIdx],longCurPosition,longDifference,longProfitTmp)
      }


      // longCurLossTmp=((longCurPosition-priceData[timeIdx])*((longAmountTmp)/priceData[timeIdx]))
      longCurLossTmp=((longCurPosition-priceData[timeIdx])*((longAmountTmp)/20000))
      // console.log('longPositionsTmp:',longPositionsTmp,longCurLossTmp,longAmountTmp)
      if(longCurLossTmp>lossLimit){
        longProfitTmp=longProfitTmp-longCurLossTmp
        // console.log('longNum_, realValue, curPosition,amount,dayTotal,longCurLossTmp...',i,(i/288).toFixed(0),priceData[timeIdx],longCurPosition,longAmountTmp,dayTotal-longCurLossTmp,longCurLossTmp)
        longAmountTmp=0
        longPositionsTmp=[]
      }
      if(shortAmountTmp==0){
        shortStartPosition=priceData[startTimeIdx]
        shortCurPosition=priceData[startTimeIdx]
        shortAmountTmp=unitAmount
        shortPositionsTmp.push(shortStartPosition)
      }
      shortVolume=priceData[timeIdx]-shortStartPosition
      // console.log('unitAmount_,',i,priceData[timeIdx],shortVolume,priceVolume*(shortPositionsTmp.length))
      // console.log('accountAmount_,',unitAmount*shortPositionsTmp.length,accountAmount)
      if(unitAmount*shortPositionsTmp.length<accountAmount){
        if(shortVolume>=priceVolume*(shortPositionsTmp.length)){
          let shortNumber=Math.trunc((shortVolume-(priceVolume*(shortPositionsTmp.length-1)))/priceVolume)
          // console.log('shortNumber:',shortNumber,shortVolume,priceData[timeIdx],shortStartPosition)
          let shortPositionsTemp=[]
          for (let k =1; k <= shortNumber; k++) {
            // console.log('shortNumber:',k)
            let shortPositionsTmpObj={}
            shortPositionsTmpObj=shortPositionsTmp[shortPositionsTmp.length-1]+priceVolume
            if(shortPositionsTmp.length<amountNumber){
              shortPositionsTmp.push(shortPositionsTmpObj)
              shortCurPosition=shortCurPosition+((shortPositionsTmpObj-shortCurPosition)*(unitAmount/(shortAmountTmp+unitAmount)))
              shortAmountTmp=shortAmountTmp+unitAmount
              shortPositionsTemp= JSON.parse(JSON.stringify(shortPositionsTmp))
            }
            else{
              shortPositionsTmpObj=shortPositionsTemp[shortPositionsTemp.length-1]+priceVolume
              shortPositionsTemp.push(shortPositionsTmpObj)
              shortCurLossTmp=(shortPositionsTmpObj - shortCurPosition)*((shortAmountTmp)/shortPositionsTmpObj)

              // console.log('k,shortCurLossTmp, realValue, curPosition,amount...',k,shortCurLossTmp,shortPositionsTmpObj,shortCurPosition,shortAmountTmp)
              if(shortCurLossTmp>lossLimit){
                shortProfitTmp=shortProfitTmp-shortCurLossTmp
                shortAmountTmp=unitAmount
                shortPositionsTmp=[]
                shortStartPosition=shortPositionsTemp[shortPositionsTemp.length-1]
                shortCurPosition=shortStartPosition
                shortPositionsTmp.push(shortPositionsTemp[shortPositionsTemp.length-1])
                // console.log('shortCurLossTmp,shortStartPosition...',i,shortCurLossTmp,shortStartPosition)
              }
            }
          }
        }
        else {
          shortDifference = 0
          // console.log('shortPositionsTmp:',shortPositionsTmp)
          for (let j =1; j <= shortPositionsTmp.length; j++) {
            shortDifference = shortPositionsTmp[shortPositionsTmp.length-j]-priceData[timeIdx]
            if(shortDifference>=profitVolume){
              shortDeleteIdxs.push(shortPositionsTmp.length-j)
              // shortProfitTmp=shortProfitTmp+(shortCurPosition-shortPositionsTmp[shortPositionsTmp.length-j]+profitVolume)*(unitAmount/shortCurPosition)
              shortProfitTmp=shortProfitTmp+(shortCurPosition-shortPositionsTmp[shortPositionsTmp.length-j]+profitVolume)*(unitAmount/20000)
              if(shortCurPosition<priceData[timeIdx]){
                lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/shortCurPosition))
              }
              console.log('curPosition_:, real,shortDifference,shortProfit',i,shortCurPosition,shortPositionsTmp[shortPositionsTmp.length-j],shortDifference,shortProfitTmp)
              shortAmountTmp=shortAmountTmp-unitAmount
              // accountAmountTmp=(accountAmount+Number(shortProfitTmp)).toFixed(0)
              // setAccountAmount(accountAmountTmp)
            }
          }
          shortDeleteIdxs.map((item,idx)=>{
            shortPositionsTmp.splice(item, 1)
          })
          // console.log('shortPositionsTmp',i,shortPositionsTmp)
          shortDeleteIdxs=[]
          let shortNumber=(Math.trunc(shortStartPosition-priceData[timeIdx]-priceVolume)/priceVolume)
          // console.log('shortNumber_:',shortStartPosition,priceData[timeIdx],shortNumber)
          // console.log('shortPositionsTmp,shortNumber:',shortPositionsTmp,shortNumber,shortCurPosition)
          for (let k =1; k <= shortNumber; k++) {
            // console.log('shortNumber_1:',i,k)
            shortStartPosition=priceData[timeIdx]
            // shortProfitTmp=shortProfitTmp+(profitVolume)*(unitAmount/(shortCurPosition-(profitVolume*k)))
            shortProfitTmp=shortProfitTmp+(profitVolume)*(unitAmount/20000)
            console.log('real_1_S:, shortCurPosition,real,shortDifference,shortProfit',i,priceData[timeIdx],shortCurPosition,shortDifference,shortProfitTmp.toFixed(0))
          }
        }
      }
      else{
      }
      // console.log('shortNum, realValue, shortCurPosition,amount...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp)
      shortDifference = 0
      // console.log('shortPositionsTmp:',shortPositionsTmp)
      for (let j =1; j <= shortPositionsTmp.length; j++) {
        shortDifference = shortPositionsTmp[shortPositionsTmp.length-j]-priceData[timeIdx]
        // console.log('shortDifference:',shortDifference)

        if(shortDifference>=profitVolume){
          shortDeleteIdxs.push(shortPositionsTmp.length-j)
          // shortProfitTmp=shortProfitTmp+(shortCurPosition-shortPositionsTmp[shortPositionsTmp.length-j]+profitVolume)*(unitAmount/shortCurPosition)
          shortProfitTmp=shortProfitTmp+(shortCurPosition-shortPositionsTmp[shortPositionsTmp.length-j]+profitVolume)*(unitAmount/20000)
          if(shortCurPosition<priceData[timeIdx]){
            lossTmp=lossTmp+((priceData[timeIdx] - shortCurPosition)*(unitAmount/shortCurPosition))
          }
          console.log('curPosition:, real,shortDifference,shortProfit',i,(i/288).toFixed(0),shortCurPosition,shortPositionsTmp[shortPositionsTmp.length-j],shortDifference,shortProfitTmp)
          shortAmountTmp=shortAmountTmp-unitAmount
          // accountAmountTmp=(accountAmount+Number(shortProfitTmp)).toFixed(0)
          // setAccountAmount(accountAmountTmp)
        }
      }
      shortDeleteIdxs.map((item,idx)=>{
        shortPositionsTmp.splice(item, 1)
      })
      // console.log('shortPositionsTmp',i,shortPositionsTmp)

      shortDeleteIdxs=[]
      let shortNumber=(Math.trunc(shortStartPosition-priceData[timeIdx]-priceVolume)/priceVolume)
      // console.log('shortPositionsTmp,shortNumber,shortStartPosition:',shortPositionsTmp,shortNumber,shortStartPosition)
      for (let k =1; k <= shortNumber; k++) {
        // console.log('shortNumber_1:',i,k)
        shortStartPosition=priceData[timeIdx]
        // shortProfitTmp=shortProfitTmp+(profitVolume)*(unitAmount/(priceData[timeIdx]))
        shortProfitTmp=shortProfitTmp+(profitVolume)*(unitAmount/20000)
        // console.log('real_2_S:, shortCurPosition,real,shortDifference,shortProfit',i,priceData[timeIdx],shortCurPosition,shortDifference,shortProfitTmp.toFixed(0))
      }
      // shortCurLossTmp=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/priceData[timeIdx])
      shortCurLossTmp=(priceData[timeIdx] - shortCurPosition)*((shortAmountTmp)/20000)
      if(shortCurLossTmp>lossLimit){
        // console.log('shortNum____, realValue, shortCurPosition,amount, dayTotal,shortCurLossTmp,accountAmountTmp...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp,dayTotal, shortCurLossTmp)
        shortProfitTmp=shortProfitTmp-shortCurLossTmp
        // console.log('shortNum_, realValue, shortCurPosition,amount, dayTotal,shortCurLossTmp,accountAmountTmp...',i,(i/288).toFixed(0),priceData[timeIdx],shortCurPosition,shortAmountTmp,dayTotal-shortCurLossTmp, shortCurLossTmp)
        shortAmountTmp=0
        shortPositionsTmp=[]
      }
      accountAmountTmp=(accountAmount*2/3+(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)*((unitAmount*amountNumber)/accountAmount))*1.5

      dayTotal=(longProfitTmp+shortProfitTmp-longCurLossTmp-shortCurLossTmp)
      if(((i+2)%288)==0){
        shortCurLossTmpArray.push(-shortCurLossTmp.toFixed(0))
        shortProfitTmpArray.push(shortProfitTmp.toFixed(0))
        longCurLossTmpArray.push(-longCurLossTmp.toFixed(0))
        longProfitTmpArray.push(longProfitTmp.toFixed(0))
        dayTotalArray.push(dayTotal.toFixed(0))
      }
    }
    let result={}
    console.log('shortCurLossTmpArray:',shortCurLossTmpArray)
    console.log('shortProfitTmpArray:',shortProfitTmpArray)
    console.log('longCurLossTmpArray:',longCurLossTmpArray)
    console.log('longProfitTmpArray:',longProfitTmpArray)
    console.log('dayTotalArray:',dayTotalArray)
    console.log('accountAmountTmp:',accountAmountTmp)
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
    console.log('exportData:',exportData)
    setExportData(exportData)
    result = {
      'id':id,
      'longProfit':longProfitTmp.toFixed(0),
      'longLoss':-longCurLossTmp.toFixed(0),
      'longCurPosition':longCurLossTmp>0?longCurPosition.toFixed(0):0,
      'longLossActive':longCurLossTmp>0?true:false,
      'longRealPosition':longRealPrice,
      'longAmount':longAmountTmp.toFixed(0),
      'shortProfit':shortProfitTmp.toFixed(0),
      'shortLoss':-shortCurLossTmp.toFixed(0),
      'shortCurPosition':shortCurLossTmp>0?shortCurPosition.toFixed(0):0,
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
    // console.log('result:',result)
    // console.log('results:',results)
    return result
    // let resultsTmp=JSON.parse(JSON.stringify(results))
    // resultsTmp.push(result)
    // console.log('resultsTmp:',resultsTmp)
    // setResults(resultsTmp)
  }
  const onChangeValue=(value, type)=> {
    console.log('value, type:',value, type)
    if(type=='unitAmount'){
      setUnitAmount(Number(value))
    }
    if(type=='priceVolume'){
      setPriceVolume(Number(value))
    }
    if(type=='unitAmount2'){
      setUnitAmount2(Number(value))
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
      console.log('daysTmp:',daysTmp)
    }

    if(start<range){
      reverseData=dataTemp.slice(start,range)
      setPriceData(reverseData)
    }
    setStartDate(start)
    setEndDate(range)
  };
  return (
    <Fragment>
      
      <Row className="display-flex flex-row-reverse mb-4 mr-4">
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          value={period}
          onChange={(e)=>{handleOption(e)}}
          options={hourPeriod}
          width={200}
        />
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
          onClick={() => {
            // shortAlgorithm3()
            // longAlgorithm3()
            algorithmLoop(6)
          }}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc 6'}
        </Button>
         <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={() => {
            // shortAlgorithm3()
            // longAlgorithm3()
            algorithmLoop(5)
          }}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Calc Sim'}
        </Button>
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={() => {
            algorithmLoop(8)
          }}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Short'}
        </Button>
        <Button
          style={{ width: '70px', height: '28px', padding: '0px',marginLeft:'20px' }}
          onClick={() => {
            algorithmLoop(9)
          }}
          color={"primary"}
          size="sm"
          className="top-right-button"
          >
            {'Long'}
        </Button>
      </Row>
      <Colxx>
        <Card className="mb-4">
          <CardBody>
            <Row className="mb-4">
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

