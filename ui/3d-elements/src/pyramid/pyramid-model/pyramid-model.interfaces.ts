import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFAction extends AnimationClip {
  name: 'Key.009Action'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Cone001: Mesh
  }
  materials: {
    ['Material.002']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
