import { useGLTF }           from '@react-three/drei'

import React                 from 'react'
import { Suspense }          from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { CubeGltf }          from '../../assets'
import { CylinderGltf }      from '../../assets'
import { DiamondGltf }       from '../../assets'
import { IsosphereGltf }     from '../../assets'
import { PillGltf }          from '../../assets'
import { PyramidGltf }       from '../../assets'
import { RingGltf }          from '../../assets'
import { SphereGltf }        from '../../assets'

export const Loader: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Suspense fallback={null}>{children}</Suspense>
)

// useGLTF.preload(CubeGltf)
// useGLTF.preload(CylinderGltf)
// useGLTF.preload(DiamondGltf)
// useGLTF.preload(IsosphereGltf)
// useGLTF.preload(PillGltf)
// useGLTF.preload(PyramidGltf)
// useGLTF.preload(RingGltf)
useGLTF.preload(SphereGltf)
