/*
 Copyright Fedyakov Mikhail  2025
 */

import { getParams } from '@/utils/_NEW/Queries/getParams'
import misc from 'api'

export const apiGetWorkspacesScripts = async () => {
	const url = `/api/v2/workspaces/scripts`
	const response = await misc.get(url)

	return response.data
}

export const apiPostWorkspacesScripts = async ({ payload }) => {
	const url = `/api/v2/workspaces/scripts`
	const response = await misc.post(url, payload)

	return response.data
}

export const apiDeleteWorkspacesScripts = async ({ payload }) => {
	const url = `/api/v2/workspaces/scripts`
	const response = await misc.delete(url, {
		data: payload
	})

	return response.data
}

export const apiPostWorkspacesScriptsExec = async ({ payload }) => {
	const url = `/api/v2/workspaces/scripts/exec`
	const response = await misc.post(url, payload)

	return response.data
}

export const apiGetWorkspaceHistory = async ({ params }) => {
	const url = ` /api/v2/workspaces/scripts/history${getParams(params)}`
	const response = await misc.get(url)

	return response.data
}
