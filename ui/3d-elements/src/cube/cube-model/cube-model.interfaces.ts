import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFAction extends AnimationClip {
  name: 'CubeAction.001' | 'Key.008Action'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Cube: Mesh
  }
  materials: {
    ['Material.002']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
