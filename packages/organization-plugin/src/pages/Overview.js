import React, { useEffect } from 'react'
import { usePlaceholder } from '@dfohub/core'
import T from 'prop-types'

import { useOrganizationContext } from '../OrganizationContext'

const Overview = ({ setTemplateState }) => {
  const organizationOverview = usePlaceholder('organizationOverview')
  const { organizationHeader, organization } = useOrganizationContext()

  useEffect(() => {
    setTemplateState((s) => ({
      ...s,
      headerTitle: 'Organization overview',
      mainMenu: 'organizationMenu',
      mainSubMenu: null,
      beforeMenu: organizationHeader,
    }))
  }, [setTemplateState, organization, organizationHeader])

  return organizationOverview.map(({ Component, key }) => (
    <Component key={key} organization={organization} />
  ))
}

Overview.propTypes = {
  setTemplateState: T.func.isRequired,
}

export default Overview
