import React from 'react'
import { Routes, HashRouter, Route, Navigate } from 'react-router-dom'
import SongsFeed from './SongsFeed'
import SongScreen from './SongScreen'
import DashboardScreen from './index'

//make routes organized variables or object variables
export const dashboardRoutes = () => {
  return (
    <Route path={'/dashboard'} element={<DashboardScreen />} >
      <Route path={'/dashboard/'} element={<Navigate to={'/dashboard/projects'} />} /> 
      <Route path={'/dashboard/projects'}  element={<SongsFeed />} /> 
      <Route path={'/dashboard/projects/:id'}  element={<SongScreen />} /> 
     {/*  <Route path={'avance'} element={<ProgressMenu2 />} />
      <Route path={'preoferta'} element={<PreOffer />} /> */}
      {/* Documentos de Acreditado */}
      {/* <Route path={firstDocRoute} element={<WorkspaceAcreditadoCard />}>
        <Route path={'0'} element={<BuroDocument />} />
        <Route path={'1'} element={<BDocument />} />
        <Route path={'2'} element={<PersonalDocument />} />
        <Route path={'3'} element={<AddressDocument type={'acreditado'} />} />
        <Route path={'4'} element={<IncomeDocument />} />
        <Route path={'5'} element={<ESEDocument />} />
        <Route path={'6'} element={<IncomeAnalysisDocument />} />
        <Route path={'7'} element={<BirthDocument />} />
        <Route path={'8'} element={<HealthDocument />} />
        <Route path={'9'} element={<MaritalDocument />} />
        <Route path={'10'} element={<ReferenceDocument />} />
        <Route path={'11'} element={<FiscalDocument />} />
      </Route> */}
      {/* Documentos de Garantia */}
      {/* <Route path={secondDocRoute} element={<WorkspaceGuaranteeCard />}>
        <Route path={'12'} element={<GeneralDataDocument />} />
        <Route path={'13'} element={<AddressGuarranty  type={'inmueble'} />} />
        <Route path={'14'} element={<Predial />} />
        <Route path={'15'} element={<WaterBill />} />
        <Route path={'16'} element={<CondominiumRegime />} />
        <Route path={'17'} element={<LandUse />} />
        <Route path={'18'} element={<ArquitecturalDrawings />} />
        <Route path={'19'} element={<TopographicalDrawings />} />
        <Route path={'21'} element={<RentContract />} />
        <Route path={'20'} element={<CompleteWork />} />
        <Route path={'22'} element={<PropertyTitle />} />
      </Route> */}
      {/* Documentos de Vendedor */}
      {/* <Route path={thirdDocRoute} element={<WorkspaceSellerCard />}>
        <Route path={'23'} element={<GeneralDocumentOwner />} />
        <Route path={'24'} element={<PersonalDocumentOwner />} />
        <Route path={'25'} element={<MaritalOwner />} />
        <Route path={'26'} element={<AddressOwner type={'vendedor'} />} />
        <Route path={'27'} element={<SalesDocument />} />
      </Route> */}
    </Route>
  )
}
