import { GroupProps }           from '@react-three/fiber'

import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export interface ModelProps extends GroupProps {
  showAnimation?: boolean
}

export interface GLTFAction extends AnimationClip {
  name: 'a'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Cone002: Mesh
    Cone: Mesh
  }
  materials: {
    ['Material.017']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
