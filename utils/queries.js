export const createInputOutputTaskMutation = `
mutation($_id: String
        $name: String
        $description: String
        $timeLimit: String
        $inputOutput: [InputOutput]
        $languages: [String]
        $organizationId: ID
        $teamId: ID
        $userId: ID) {
    createInputOutputTask (
            _id: $_id
            name: $name
            description: $description
            timeLimit: $timeLimit
            inputOutput: $inputOutput
            languages: $languages
            organizationId: $organizationId
            teamId: $teamId
            userId: $userId)
  }
`;

export const createTaskAutomaticallyMutation = `
mutation (
      $_id: String
      $name: String
      $description: String
      $timeLimit: String
      $organizationId: ID
      $teamId: ID
      $hiringType: String
      $repoLink: String
      $testStartCommand: String
      $testReportPath: String
      $envVariables: [[String]]
      $tags: [String]
      $initScript: String
      $additionalPorts: [Int]
      $userId: ID
      $gitLogin: String
      $gitPassword: String
) { 
    createTaskAutomatically (
        _id: $_id
        name: $name
        description: $description
        timeLimit: $timeLimit
        organizationId: $organizationId
        teamId: $teamId
        hiringType: $hiringType
        repoLink: $repoLink
        testStartCommand: $testStartCommand
        testReportPath: $testReportPath
        envVariables: $envVariables
        tags: $tags
        initScript: $initScript
        additionalPorts: $additionalPorts
        userId: $userId
        gitLogin: $gitLogin
        gitPassword: $gitPassword
    )
}
`;
