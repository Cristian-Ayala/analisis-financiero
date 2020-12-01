new Vue({
  el: `#app`,
  template: `#app-template`,

  data: () => ({
    year1: {
      year: 2018,

      ER: {
        ingresos: 229234,
        consumosGastosExternos: 141048,

        gastosPersonal: 15261,
        investigacionDev: 11581,

        ingresosFinancieros: 2878,
        otrosGastos: 133,

        impuestoBeneficios: 15738,

        resultadoOperacionesInterrumpidas: 0
      },

      balanceGral: {
        //Cuentas de activos Corriente
        efectivoYEquivalentes: 7584,
        cuentasPorCobrar: 25950,
        inventarios: 9340,
        pagosAnticipados: 1098,
        instrumentosFinancieros: 106,
        depositosEnCuentas: 619,
        activosClasificadosMantenidos: 154,

        //Cuentas de Activo no corriente
        propiedadPlantaYEquipo: 87243,
        activosPorDerechodeUso: 0,
        inversionEnAsociadas: 2645,
        instrumentosFinancierosDerivados: 3017,
        impuestosaLaUtilidad: 3886,
        activosIntagibles: 54476,
        creditoMercantil: 65513,
        otrosActivos: 1685,

        //cuentas de pasivo
        PorcionACortoPlazo: 1153,
        cuentasPorPagar: 21074,
        otrasCuentasPorPagar: 23055,
        pasivosPorArrendamiento: 0,
        cuentasPorPagaraPartesRelacionadas: 909,
        impuestoSobreLaRenta: 256,
        participaciónDeLosTrabajadoresEnLasUtilidades: 1423,
        instrumentosFinancierosDerivadosP: 879,

        //Cuentas de pasivo no corriente
        deudaLargoPlazo: 88693,
        pasivosPorArrendamientoNC: 0,
        instrumentosFinancierosDerivadosNC: 347,
        beneficioEmpleados: 25885,
        impuestoDiferidoGanancias: 5720,
        otrosPasivos: 9347,

        //Cuentas de Capital
        accionesComunes: 4199,
        utilidadesRetenidas: 59238,
        otroInstrumentoFinancierodeCapital: 9138,
        efectoAcumuladodeConversiondeOperacionesExtranjeras: 4739,
        utilidadesActuariales: 3131,
        valuaciondeInstrumentos: -386,
        utilidadesPorRealizar: -369,
        participacionNOControladora: 4885
      }
    },

    year2: {
      year: 2019,

      ER: {
        ingresos: 265595,
        consumosGastosExternos: 163756,

        gastosPersonal: 16705,
        investigacionDev: 14236,

        ingresosFinancieros: 2446,
        otrosGastos: 441,

        impuestoBeneficios: 11857,

        resultadoOperacionesInterrumpidas: 1515
      },

      balanceGral: {
        // Cuentas de activo corriente
        efectivoYEquivalentes: 6251,
        cuentasPorCobrar: 26198,
        inventarios: 9819,
        pagosAnticipados: 1188,
        instrumentosFinancieros: 143,
        depositosEnCuentas: 325,
        activosClasificadosMantenidos: 273,

        //Cuentas de Activo no corriente
        propiedadPlantaYEquipo: 84341,
        activosPorDerechodeUso: 25550,
        inversionEnAsociadas: 2871,
        instrumentosFinancierosDerivados: 1533,
        impuestosaLaUtilidad: 4590,
        activosIntagibles: 51318,
        creditoMercantil: 62794,
        otrosActivos: 1887,

        //Cuentas de Pasivo corriente
        PorcionACortoPlazo: 5408,
        cuentasPorPagar: 23105,
        otrasCuentasPorPagar: 18473,
        pasivosPorArrendamiento: 4599,
        cuentasPorPagaraPartesRelacionadas: 1064,
        impuestoSobreLaRenta: 115,
        participaciónDeLosTrabajadoresEnLasUtilidades: 1183,
        instrumentosFinancierosDerivadosP: 673,

        //Pasivo no Corriente
        deudaLargoPlazo: 81264,
        pasivosPorArrendamientoNC: 20741,
        instrumentosFinancierosDerivadosNC: 437,
        beneficioEmpleados: 30426,
        impuestoDiferidoGanancias: 5241,
        otrosPasivos: 8041,

        //Cuentas de Capital
        accionesComunes: 4156,
        utilidadesRetenidas: 61332,
        otroInstrumentoFinancierodeCapital: 8931,
        efectoAcumuladodeConversiondeOperacionesExtranjeras: 1247,
        utilidadesActuariales: -226,
        valuaciondeInstrumentos: -422,
        utilidadesPorRealizar: -1282,
        participacionNOControladora: 4575
      }
    }
  }),

  methods: {
    margenUtilidad(utilidad, ventas) {
      return utilidad / ventas;
    },

    analisisVertical(fraccion, total) {
      return ((fraccion / total) * 100).toFixed(2);
    }
  },

  computed: {
    computedYear1() {
      //calculos de estado de resultados
      let ER = this.year1.ER;

      let beneficioBruto = ER.ingresos - ER.consumosGastosExternos;
      let gastosExplotacion =
        parseInt(ER.gastosPersonal) +
        parseInt(ER.investigacionDev) +
        parseInt(ER.consumosGastosExternos);
      let resultadoExplotacion = ER.ingresos - gastosExplotacion;
      let resultadoOrdinarioAntesImpuestos =
        parseInt(resultadoExplotacion) +
        parseInt(ER.ingresosFinancieros) -
        ER.otrosGastos;
      let resultadoOperacionesContinuadas =
        resultadoOrdinarioAntesImpuestos - ER.impuestoBeneficios;
      let resultadoAtribuidoGrupo =
        resultadoOperacionesContinuadas - ER.resultadoOperacionesInterrumpidas;

      //calculos de balance general
      let balanceGral = this.year1.balanceGral;


      let totalActivosCorrientes =
        parseInt(balanceGral.efectivoYEquivalentes) +
        parseInt(balanceGral.efectivoYEquivalentes) +
        parseInt(balanceGral.cuentasPorCobrar) +
        parseInt(balanceGral.inventarios) +
        parseInt(balanceGral.pagosAnticipados) +
        parseInt(balanceGral.instrumentosFinancieros) +
        parseInt(balanceGral.depositosEnCuentas) +
        parseInt(balanceGral.activosClasificadosMantenidos);
      //let totalActivosNoCorrientes
      let totalActivosFijos = parseInt(balanceGral.propiedadPlantaYEquipo) +
        parseInt(balanceGral.activosPorDerechodeUso) +
        parseInt(balanceGral.inversionEnAsociadas) +
        parseInt(balanceGral.instrumentosFinancierosDerivados) +
        parseInt(balanceGral.impuestosaLaUtilidad) +
        parseInt(balanceGral.activosIntagibles) +
        parseInt(balanceGral.creditoMercantil) +
        parseInt(balanceGral.otrosActivos);
      //total de Activos
      let totalActivos =
        parseInt(totalActivosCorrientes) +
        parseInt(totalActivosFijos);

      let totalPasivosCorrientes =
        parseInt(balanceGral.PorcionACortoPlazo) +
        parseInt(balanceGral.cuentasPorPagar) +
        parseInt(balanceGral.otrasCuentasPorPagar) +
        parseInt(balanceGral.pasivosPorArrendamiento) +
        parseInt(balanceGral.cuentasPorPagaraPartesRelacionadas) +
        parseInt(balanceGral.impuestoSobreLaRenta) +
        parseInt(balanceGral.participaciónDeLosTrabajadoresEnLasUtilidades) +
        parseInt(balanceGral.instrumentosFinancierosDerivadosP);

      //let totalPasivosNoCorrientes = ;
      let totalPasivosFijos = parseInt(balanceGral.deudaLargoPlazo) +
        parseInt(balanceGral.pasivosPorArrendamientoNC) +
        parseInt(balanceGral.instrumentosFinancierosDerivadosNC) +
        parseInt(balanceGral.beneficioEmpleados) +
        parseInt(balanceGral.impuestoDiferidoGanancias) +
        parseInt(balanceGral.otrosPasivos);

      let totalPasivos =
        totalPasivosFijos +
        totalPasivosCorrientes;

      let participacionControladora =
        parseInt(balanceGral.accionesComunes) +
        parseInt(balanceGral.utilidadesRetenidas) +
        parseInt(balanceGral.otroInstrumentoFinancierodeCapital) +
        parseInt(balanceGral.efectoAcumuladodeConversiondeOperacionesExtranjeras) +
        parseInt(balanceGral.utilidadesActuariales) +
        parseInt(balanceGral.valuaciondeInstrumentos) +
        parseInt(balanceGral.utilidadesPorRealizar);

      let capitalContable =
        parseInt(balanceGral.participacionNOControladora) +
        participacionControladora;

      let totalPasivoCapitalContable =
        parseInt(totalPasivos) + parseInt(capitalContable);



      //calculos de razones financieras
      //razones de liquidez
      let liquidezCorriente = (totalActivosCorrientes / totalPasivosCorrientes).toFixed(2);
      let pruebaAcida = ((totalActivosCorrientes - balanceGral.inventarios) / totalPasivosCorrientes).toFixed(2);

      //indices de actividad
      let rotacionInventarios = (ER.consumosGastosExternos / balanceGral.inventarios).toFixed(2);
      let ppc = (balanceGral.cuentasPorCobrar / (ER.ingresos / 365)).toFixed(2);
      let ppp = (balanceGral.cuentasPorPagar / (ER.consumosGastosExternos / 365)).toFixed(2)
      let rotacionActivosTotales = (ER.ingresos / totalActivos).toFixed(2);

      //indices de endeudamiento
      let indiceEndeudamiento = (totalPasivos / totalActivos).toFixed(2);
      let razonCargosInteresFijo = (resultadoOrdinarioAntesImpuestos / ER.impuestoBeneficios).toFixed(2);

      //indices de rentabilidad
      let margenUtilidadBruta = (beneficioBruto / ER.ingresos).toFixed(2);
      let margenUtilidadOperativa = (resultadoExplotacion / ER.ingresos).toFixed(2);

      let margenUtilidadNeta = (resultadoAtribuidoGrupo / ER.ingresos).toFixed(2);
      let rsa = (margenUtilidadNeta * rotacionActivosTotales).toFixed(2); //rendimiento sobre activos totales
      let maf = (totalActivos / balanceGral.accionesComunes).toFixed(2); //multiplicador de apalancamiento financiero
      let rsp = (maf * rsa).toFixed(2); //rendimiento sobre patrimonio


      return {
        ER: {
          beneficioBruto,
          gastosExplotacion,
          resultadoExplotacion,
          resultadoOrdinarioAntesImpuestos,
          resultadoOperacionesContinuadas,
          resultadoAtribuidoGrupo
        },

        balanceGral: {
          efectivoEInversionesCortoPlazo,
          totalActivosCorrientes,
          propiedadPlantaYEquipoNeto,
          totalActivosFijos,
          totalActivos,
          totalPasivosCorrientes,
          totalPasivosFijos,
          totalPasivos,
          capitalContable,
          totalPasivoCapitalContable
        },

        razones: {
          liquidezCorriente,
          pruebaAcida,
          rotacionInventarios,
          ppc,
          ppp,
          rotacionActivosTotales,
          indiceEndeudamiento,
          razonCargosInteresFijo,
          margenUtilidadBruta,
          margenUtilidadOperativa,
          margenUtilidadNeta,
          rsa,
          maf,
          rsp
        }
      };
    },

    computedYear2() {
      //calculos de estado de resultados
      let ER = this.year2.ER;

      let beneficioBruto = ER.ingresos - ER.consumosGastosExternos;
      let gastosExplotacion =
        parseInt(ER.gastosPersonal) +
        parseInt(ER.investigacionDev) +
        parseInt(ER.consumosGastosExternos);
      let resultadoExplotacion = ER.ingresos - gastosExplotacion;
      let resultadoOrdinarioAntesImpuestos =
        parseInt(resultadoExplotacion) +
        parseInt(ER.ingresosFinancieros) -
        ER.otrosGastos;
      let resultadoOperacionesContinuadas =
        resultadoOrdinarioAntesImpuestos - ER.impuestoBeneficios;
      let resultadoAtribuidoGrupo =
        resultadoOperacionesContinuadas - ER.resultadoOperacionesInterrumpidas;

      //calculos de balance general
      let balanceGral = this.year2.balanceGral;


      let totalActivosCorrientes =
        parseInt(balanceGral.efectivoYEquivalentes) +
        parseInt(balanceGral.efectivoYEquivalentes) +
        parseInt(balanceGral.cuentasPorCobrar) +
        parseInt(balanceGral.inventarios) +
        parseInt(balanceGral.pagosAnticipados) +
        parseInt(balanceGral.instrumentosFinancieros) +
        parseInt(balanceGral.depositosEnCuentas) +
        parseInt(balanceGral.activosClasificadosMantenidos);
      //let totalActivosNoCorrientes
      let totalActivosFijos = 
        parseInt(balanceGral.propiedadPlantaYEquipo) +
        parseInt(balanceGral.activosPorDerechodeUso) +
        parseInt(balanceGral.inversionEnAsociadas) +
        parseInt(balanceGral.instrumentosFinancierosDerivados) +
        parseInt(balanceGral.impuestosaLaUtilidad) +
        parseInt(balanceGral.activosIntagibles) +
        parseInt(balanceGral.creditoMercantil) +
        parseInt(balanceGral.otrosActivos);

      //total de Activos
      let totalActivos =
        parseInt(totalActivosCorrientes) +
        parseInt(totalActivosFijos);

      let totalPasivosCorrientes =
        parseInt(balanceGral.PorcionACortoPlazo) +
        parseInt(balanceGral.cuentasPorPagar) +
        parseInt(balanceGral.otrasCuentasPorPagar) +
        parseInt(balanceGral.pasivosPorArrendamiento) +
        parseInt(balanceGral.cuentasPorPagaraPartesRelacionadas) +
        parseInt(balanceGral.impuestoSobreLaRenta) +
        parseInt(balanceGral.participaciónDeLosTrabajadoresEnLasUtilidades) +
        parseInt(balanceGral.instrumentosFinancierosDerivadosP);

      //let totalPasivosNoCorrientes = ;
      let totalPasivosFijos = 
        parseInt(balanceGral.deudaLargoPlazo) +
        parseInt(balanceGral.pasivosPorArrendamientoNC) +
        parseInt(balanceGral.instrumentosFinancierosDerivadosNC) +
        parseInt(balanceGral.beneficioEmpleados) +
        parseInt(balanceGral.impuestoDiferidoGanancias) +
        parseInt(balanceGral.otrosPasivos);

      let totalPasivos =
        totalActivosFijos +
        totalPasivosCorrientes;

      let participacionControladora =
        parseInt(balanceGral.accionesComunes) +
        parseInt(balanceGral.utilidadesRetenidas) +
        parseInt(balanceGral.otroInstrumentoFinancierodeCapital) +
        parseInt(balanceGral.efectoAcumuladodeConversiondeOperacionesExtranjeras) +
        parseInt(balanceGral.utilidadesActuariales) +
        parseInt(balanceGral.valuaciondeInstrumentos) +
        parseInt(balanceGral.utilidadesPorRealizar);

      let capitalContable =
        parseInt(balanceGral.participacionNOControladora) +
        participacionControladora;

      let totalPasivoCapitalContable =
        parseInt(totalPasivos) + parseInt(capitalContable);


      //calculos de razones financieras
      //razones de liquidez
      let liquidezCorriente = (totalActivosCorrientes / totalPasivosCorrientes).toFixed(2);
      let pruebaAcida = ((totalActivosCorrientes - balanceGral.inventarios) / totalPasivosCorrientes).toFixed(2);

      //indices de actividad
      let rotacionInventarios = (ER.consumosGastosExternos / balanceGral.inventarios).toFixed(2);
      let ppc = (balanceGral.cuentasPorCobrar / (ER.ingresos / 365)).toFixed(2);
      let ppp = (balanceGral.cuentasPorPagar / (ER.consumosGastosExternos / 365)).toFixed(2)
      let rotacionActivosTotales = (ER.ingresos / totalActivos).toFixed(2);

      //indices de endeudamiento
      let indiceEndeudamiento = (totalPasivos / totalActivos).toFixed(2);
      let razonCargosInteresFijo = (resultadoOrdinarioAntesImpuestos / ER.impuestoBeneficios).toFixed(2);

      //indices de rentabilidad
      let margenUtilidadBruta = (beneficioBruto / ER.ingresos).toFixed(2);
      let margenUtilidadOperativa = (resultadoExplotacion / ER.ingresos).toFixed(2);

      let margenUtilidadNeta = (resultadoAtribuidoGrupo / ER.ingresos).toFixed(
        2
      );
      let rsa = (margenUtilidadNeta * rotacionActivosTotales).toFixed(2); //rendimiento sobre activos totales
      let maf = (totalActivos / balanceGral.accionesComunes).toFixed(2); //multiplicador de apalancamiento financiero
      let rsp = (maf * rsa).toFixed(2); //rendimiento sobre patrimonio


      return {
        ER: {
          beneficioBruto,
          gastosExplotacion,
          resultadoExplotacion,
          resultadoOrdinarioAntesImpuestos,
          resultadoOperacionesContinuadas,
          resultadoAtribuidoGrupo
        },

        balanceGral: {
          efectivoEInversionesCortoPlazo,
          totalActivosCorrientes,
          propiedadPlantaYEquipoNeto,
          totalActivosFijos,
          totalActivos,
          totalPasivosCorrientes,
          totalPasivosFijos,
          totalPasivos,
          capitalContable,
          totalPasivoCapitalContable
        },

        razones: {
          liquidezCorriente,
          pruebaAcida,
          rotacionInventarios,
          ppc,
          ppp,
          rotacionActivosTotales,
          indiceEndeudamiento,
          razonCargosInteresFijo,
          margenUtilidadBruta,
          margenUtilidadOperativa,
          margenUtilidadNeta,
          rsa,
          maf,
          rsp
        }
      };
    }
  }
});