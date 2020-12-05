new Vue({
  el: `#app`,
  template: `#app-template`,

  data: () => ({
    year1: {
      year: 2018,

      ER: {
        ventasNetas: 289320,
        costoVentas: 135669,

        //Gastos
        distribucionVenta: 109701,
        administracion: 19006,
        gastosIntegracion: 1855,
        otrosGastos: 4580,

        interesesCargo: 7668,
        interesesGanados: 386,
        cambiariaNeta: 85,
        posicionMonetaria: 202,
        participacionCompanias: 194,

        impuestoBeneficios: 4897,

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

        ventasNetas: 291926,
        costoVentas: 138184,

        //Gastos generales
        distribucionVenta: 110234,
        administracion: 16641,
        gastosIntegracion: 2435,
        otrosGastos: 4013,

        interesesCargo: 8561,
        interesesGanados: 560,
        cambiariaNeta: 445,
        posicionMonetaria: 114,
        participacionCompanias: 249,

        impuestoBeneficios: 4733,

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

      let beneficioBruto = ER.ventasNetas - ER.costoVentas;
      let gastosGenerales =
        parseInt(ER.administracion) +
        parseInt(ER.gastosIntegracion) +
        parseInt(ER.otrosGastos) +
        parseInt(ER.distribucionVenta);
      let utilidadOperacion = parseInt(beneficioBruto) - parseInt(gastosGenerales);
      let costoIntegral =
        parseInt(ER.interesesCargo) -
        parseInt(ER.interesesGanados) -
        parseInt(ER.cambiariaNeta) -
        parseInt(ER.posicionMonetaria);
      let resultadoOrdinarioAntesImpuestos =
        parseInt(utilidadOperacion) +
        parseInt(ER.participacionCompanias) -
        parseInt(costoIntegral);
      let utilidadNetaConsolidada =
        resultadoOrdinarioAntesImpuestos - ER.impuestoBeneficios;

      //calculos de balance general
      let balanceGral = this.year1.balanceGral;


      let totalActivosCorrientes =
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
        parseInt(totalPasivosFijos) +
        parseInt(totalPasivosCorrientes);

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
        parseInt(participacionControladora);

      let totalPasivoCapitalContable =
        parseInt(totalPasivos) + parseInt(capitalContable);



      //calculos de razones financieras
      //razones de liquidez
      let liquidezCorriente = (totalActivosCorrientes / totalPasivosCorrientes).toFixed(2);
      let pruebaAcida = ((totalActivosCorrientes - balanceGral.inventarios) / totalPasivosCorrientes).toFixed(2);

      //indices de actividad
      let rotacionInventarios = (ER.costoVentas / balanceGral.inventarios).toFixed(2);
      let ppc = (balanceGral.cuentasPorCobrar / (ER.ventasNetas / 365)).toFixed(2);
      let ppp = (balanceGral.cuentasPorPagar / (ER.costoVentas / 365)).toFixed(2)
      let rotacionActivosTotales = (ER.ventasNetas / totalActivos).toFixed(2);

      //indices de endeudamiento
      let indiceEndeudamiento = (totalPasivos / totalActivos).toFixed(2);
      let razonCargosInteresFijo = (resultadoOrdinarioAntesImpuestos / ER.impuestoBeneficios).toFixed(2);

      //indices de rentabilidad
      let margenUtilidadBruta = (beneficioBruto / ER.ventasNetas).toFixed(2);
      let margenUtilidadOperativa = (utilidadOperacion / ER.ventasNetas).toFixed(2);

      let margenUtilidadNeta = (utilidadNetaConsolidada / ER.ventasNetas).toFixed(2);
      let rsa = (margenUtilidadNeta * rotacionActivosTotales).toFixed(2); //rendimiento sobre activos totales
      let maf = (totalActivos / balanceGral.accionesComunes).toFixed(2); //multiplicador de apalancamiento financiero
      let rsp = (maf * rsa).toFixed(2); //rendimiento sobre patrimonio


      return {
        ER: {
          beneficioBruto,
          gastosGenerales,
          utilidadOperacion,
          resultadoOrdinarioAntesImpuestos,
          utilidadNetaConsolidada,
          costoIntegral
        },

        balanceGral: {

          totalActivosCorrientes,

          totalActivosFijos,
          totalActivos,
          totalPasivosCorrientes,
          totalPasivosFijos,
          totalPasivos,
          capitalContable,
          totalPasivoCapitalContable,
          participacionControladora
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

      let beneficioBruto = ER.ventasNetas - ER.costoVentas;
      let gastosGenerales =
        parseInt(ER.administracion) +
        parseInt(ER.gastosIntegracion) +
        parseInt(ER.otrosGastos) +
        parseInt(ER.distribucionVenta);
      let utilidadOperacion = beneficioBruto - gastosGenerales;
      let costoIntegral =
        parseInt(ER.interesesCargo) -
        parseInt(ER.interesesGanados) +
        parseInt(ER.cambiariaNeta) +
        parseInt(ER.posicionMonetaria);
      let resultadoOrdinarioAntesImpuestos =
        parseInt(utilidadOperacion) +
        parseInt(ER.participacionCompanias) -
        costoIntegral;
      let utilidadNetaConsolidada =
        resultadoOrdinarioAntesImpuestos - ER.impuestoBeneficios;

      //calculos de balance general
      let balanceGral = this.year2.balanceGral;


      let totalActivosCorrientes =
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
      let rotacionInventarios = (ER.costoVentas / balanceGral.inventarios).toFixed(2);
      let ppc = (balanceGral.cuentasPorCobrar / (ER.ventasNetas / 365)).toFixed(2);
      let ppp = (balanceGral.cuentasPorPagar / (ER.costoVentas / 365)).toFixed(2)
      let rotacionActivosTotales = (ER.ventasNetas / totalActivos).toFixed(2);

      //indices de endeudamiento
      let indiceEndeudamiento = (totalPasivos / totalActivos).toFixed(2);
      let razonCargosInteresFijo = (resultadoOrdinarioAntesImpuestos / ER.impuestoBeneficios).toFixed(2);

      //indices de rentabilidad
      let margenUtilidadBruta = (beneficioBruto / ER.ventasNetas).toFixed(2);
      let margenUtilidadOperativa = (utilidadOperacion / ER.ventasNetas).toFixed(2);

      let margenUtilidadNeta = (utilidadNetaConsolidada / ER.ventasNetas).toFixed(2);
      let rsa = (margenUtilidadNeta * rotacionActivosTotales).toFixed(2); //rendimiento sobre activos totales
      let maf = (totalActivos / balanceGral.accionesComunes).toFixed(2); //multiplicador de apalancamiento financiero
      let rsp = (maf * rsa).toFixed(2); //rendimiento sobre patrimonio


      return {
        ER: {
          beneficioBruto,
          gastosGenerales,
          utilidadOperacion,
          resultadoOrdinarioAntesImpuestos,
          utilidadNetaConsolidada,
          costoIntegral         
        },

        balanceGral: {

          totalActivosCorrientes,

          totalActivosFijos,
          totalActivos,
          totalPasivosCorrientes,
          totalPasivosFijos,
          totalPasivos,
          capitalContable,
          totalPasivoCapitalContable,
          participacionControladora
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